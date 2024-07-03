import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { createPlan, deletePlan, getPlans, updatePlan } from '../utils/services';
import PlanCardComponent from '../components/PlanCardComponent';
import NavBarAdmin from '../components/Navbar/NavBarAdmin';
import CloseIcon from '../images/closeicon.svg';
const TaxPlans = (props) => {
  const [plan, setPlans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedCategory] = useState({});
  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    await getPlans().then(async (response) => {
      if (response.data) {
        setPlans(response.data);
      } else if (response.error) {
        setPlans([]);
      }
    });
  };

  const closePopup = () => {
    setShowModal(false);
    setSelectedCategory({});
  };

  const onUpdateVal = (e, name) =>
    setSelectedCategory((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));

  const handleClick = (plan) => {
    let newObj = plan;
    // newObj['items'].map((itm) => ({ label: itm.title, value: itm._id }));
    setSelectedCategory(newObj);
    setShowModal(true);
  };

  const updateNotes = async () => {
    let payload = { ...selectedPlan };

    if (payload._id) {
      await updatePlan(payload).then(async (response) => {
        closePopup();
        if (response.data) {
          fetchPlans();
        } else if (response.error) {
        }
      });
    } else {
      await createPlan(payload).then(async (response) => {
        closePopup();
        if (response.data) {
          fetchPlans();
        } else if (response.error) {
        }
      });
    }
  };

  const deletePlanFunc = async (plan) => {
    let payload = {
      _id: plan._id,
    };
    await deletePlan(payload).then(async (response) => {
      closePopup();
      if (response.data) {
        fetchPlans();
      } else if (response.error) {
      }
    });
  };

  return (
    <>
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Tax Plans</h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <div className="px-12 mt-10" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {plan?.map((plan) => {
                return (
                  <div
                    onClick={() => {
                      handleClick(plan);
                    }}
                     className='cursor-pointer'
                  >
                    <PlanCardComponent itm={plan} />
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
                <div className="relative mx-auto max-w-3xl md:max-w-2xl md:w-full m-3 md:mx-auto my-auto">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t w-auto ">
                      <h3 className="text-3xl font-semibold">{selectedPlan?._id ? 'Edit' : 'Create New'} Plan</h3>
                      {/* <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">x</span>
                      </button> */}
                      <img src={CloseIcon} className="h-6 cursor-pointer" onClick={() => setShowModal(false)} alt='closeIocn'/>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-sm font-bold mb-2">Title</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={selectedPlan.title} onChange={(e) => onUpdateVal(e, 'title')} />
                        <label className="block text-black text-sm font-bold mb-2 mt-2">Description</label>
                        <textarea
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          value={selectedPlan.description}
                          onChange={(e) => onUpdateVal(e, 'description')}
                        />

                        <label className="block text-black text-sm font-bold mb-2 mt-2">Original Price</label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          value={selectedPlan.originalPrice}
                          onChange={(e) => onUpdateVal(e, 'originalPrice')}
                        />

                        <label className="block text-black text-sm font-bold mb-2 mt-2">New Price</label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          value={selectedPlan.newPrice}
                          onChange={(e) => onUpdateVal(e, 'newPrice')}
                        />

                        <label className="block text-black text-sm font-bold mb-2 mt-2">Duration</label>
                        <select onChange={(e) => onUpdateVal(e, 'period')}>
                          <option>Month</option>
                          <option>Year</option>
                        </select>
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
                        onClick={() => updateNotes()}
                      >
                        Submit
                      </button>
                      <button
                        className="text-white bg-red-500 active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => deletePlanFunc(selectedPlan)}
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
      <Footer />
    </>
  );
};

export default TaxPlans;
