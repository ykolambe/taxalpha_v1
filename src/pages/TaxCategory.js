import React, { useEffect, useState } from 'react';

import { createCat, deleteCat, getCategories, getPlans, updateCat } from '../utils/services';

import CardComponent from '../components/CardComponent';
import NavBarAdmin from '../components/Navbar/NavBarAdmin';
import AsyncSelect from 'react-select/async';
import CloseIcon from '../images/closeicon.svg';

const TaxCategory = (props) => {
  const [category, setCategory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    await getCategories().then(async (response) => {
      if (response.data) {
        setCategory(response.data);
      } else if (response.error) {
        setCategory([]);
      }
    });
  };
  const deteteCategory = async (category) => {
    let payload = {
      _id: category._id,
    };
    await deleteCat(payload).then(async (response) => {
      closePopup();
      if (response.data) {
        fetchCategories();
      } else if (response.error) {
      }
    });
  };

  const handleClick = (plan) => {
    let newObj = plan;
    newObj['items'].map((itm) => ({ label: itm.title, value: itm._id }));
    setSelectedCategory(newObj);
    setShowModal(true);
  };

  const updateCategory = async () => {
    let payload = { ...selectedCategory };

    if (payload._id) {
      await updateCat(payload).then(async (response) => {
        closePopup();
        if (response.data) {
          fetchCategories();
        } else if (response.error) {
        }
      });
    } else {
      await createCat(payload).then(async (response) => {
        closePopup();
        if (response.data) {
          fetchCategories();
        } else if (response.error) {
        }
      });
    }
  };

  const onUpdateVal = (e, name) =>
    setSelectedCategory((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));

  const closePopup = () => {
    setShowModal(false);
    setSelectedCategory({});
  };

  const loadPlansList = async (inputValue, callback) => {
    if (inputValue === '') {
      callback([]);
      await getPlans().then(async (response) => {
        let options = [];
        await response.data.map((res) => {
          options.push({ label: res.title, value: res._id });
          setTimeout(() => {
            callback(options);
          }, 1000);
        });
        callback(options);
      });
    } else {
      await getPlans(inputValue).then(async (response) => {
        let options = await response.data.map((res) => {
          return { label: res.title, value: res._id };
        });
        callback(options);
      });
    }
  };

  const onChangePlan = (selectedOptions) => {
    if (!selectedOptions) {
      selectedOptions = [];
    }
    setSelectedCategory((prevData) => ({
      ...prevData,
      items: selectedOptions.map((permission) => ({ title: permission.label, _id: permission.value })),
    }));
  };

  return (
    <>
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Categories</h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <div className="ml-auto">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-auto 
                                    focus:outline-none focus:shadow-outline"
              onClick={() => setShowModal(true)}
            >
              Create New Category
            </button>
          </div>
          <div className="px-12 mt-10" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {category?.map((plan) => {
                return (
                  <div
                    onClick={() => {
                      handleClick(plan);
                    }}
                    className="cursor-pointer"
                  >
                    <CardComponent itm={plan} />
                  </div>
                );
              })}
            </div>
          </div>

          {showModal ? (
            <>
              <div
                className="drop-shadow-2xl flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none w-50  size-full my-auto mt-2"
                style={{ height: 800 }}
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <div className="relative mx-auto max-w-3xl md:max-w-2xl md:w-full m-3 md:mx-auto">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t w-auto ">
                      <h3 className="text-3xl font-semibold">{selectedCategory?._id ? 'Edit' : 'Create New'} Category</h3>
                      {/* <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">x</span>
                      </button> */}
                                            <img src={CloseIcon} className="h-6 cursor-pointer" onClick={() => setShowModal(false)} alt='closeIocn'/>

                    </div>
                    <div className="relative p-6 flex-auto">
                      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-sm font-bold mb-1">Title</label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          value={selectedCategory.title}
                          onChange={(e) => onUpdateVal(e, 'title')}
                        />
                        <label className="block text-black text-sm font-bold mb-1">Description</label>
                        <textarea
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          value={selectedCategory.description}
                          onChange={(e) => onUpdateVal(e, 'description')}
                        />

                        <label className="block text-black text-sm font-bold mb-1">Plans</label>
                        {console.log(selectedCategory, 'selectedCategory')}
                        <AsyncSelect
                          isMulti
                          cacheOptions
                          defaultOptions
                          value={
                            Object.keys(selectedCategory).length > 0 && selectedCategory?.items.length > 0
                              ? selectedCategory.items.map((itm) => ({
                                  label: itm.title,
                                  value: itm._id,
                                }))
                              : null
                          }
                          loadOptions={loadPlansList}
                          onChange={onChangePlan}
                        />
                      </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-black-500 bg-grey-100 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => closePopup()}
                      >
                        Close
                      </button>
                      <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => updateCategory()}
                      >
                        Submit
                      </button>
                      <button
                        className="text-white bg-red-500 active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => deteteCategory(selectedCategory)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TaxCategory;
