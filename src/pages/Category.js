import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import { getCategoryById } from '../utils/services';
import PlanCardComponent from '../components/PlanCardComponent';

const Category = (props) => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        let path = window.location.pathname;
        let id = path.split('/category/')[1];
        fetchCategoryById(id);
    }, [])


    const fetchCategoryById = async (id) => {
        await getCategoryById(id).then(async (response) => {
            if (response.data) {
                setCategory(response.data);
            } else if (response.error) {
                setCategory([]);
            }
        });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">{category.title}</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <div className="px-12 mt-10" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {category?.items?.map((plan) => {
                                return (
                                    <>
                                        <PlanCardComponent itm={plan} />
                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>


    )
}

export default Category;