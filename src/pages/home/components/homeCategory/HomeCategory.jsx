import React, { useEffect, useState } from 'react'
import CarsCard from './CarsCard'
import { MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css'
import { FreeMode } from 'swiper/modules';

const HomeCategory = () => {
    const URL='https://autoapi.dezinfeksiyatashkent.uz/api'
    const [categorydata,setcategoryData]=useState([])
    const [carsdata,setcarsData]=useState([])
    const [maindata,setmainData]=useState([])
    const [categories,setCategories]=useState(null)

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch(`${URL}/categories`);
                const data = await response.json();
                setcategoryData(data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchCar = async () => {
            try {
                const response = await fetch(`${URL}/cars`);
                const data = await response.json();
                setcarsData(data.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCategory();
        fetchCar();
    }, []);

    useEffect(() => {
        let newData = [];
        let obj={}
        for (let i = 0; i < categorydata.length; i++) {
            let t=[]
            if(i==0){ 
                obj={
                [`${categorydata[i].name_en}`]:"a"
            }
            }

            if(!(categorydata[i].name_en in obj)&&i!=0) obj={...obj,[`${categorydata[i].name_en}`]:'a'}
            
            for (let j = 0; j < carsdata.length; j++) {
                if(categorydata[i].name_en==carsdata[j].category.name_en) t.push(carsdata[j])
            }
            
            if(t.length!=0) newData.push(t)
        }
        setmainData(newData);
        setCategories(obj)
    }, [categorydata, carsdata]);

  return (
    <div>
        <div className='container'>
            <div>
                {
                    maindata.map((x,i)=>(
                        <div key={i} className='my-14'>
                        <div className='flex items-center justify-between mb-6'>
                            <h2 className='md:text-4xl sm:text-3xl text-lg text-white'>
                                {x[0].category.name_en}
                            </h2>

                            <Link to={'/'} className='flex items-center sm:w-[120px] w-[90px] text-white gap-2 text-sm sm:text-xl group'>
                                See All
                                <span className='border-[1px] border-white text-xl flex items-center p-1 justify-center  rounded-full transition-transform duration-300 group-hover:translate-x-5'>
                                    <MdChevronRight/>
                                </span>
                            </Link>
                        </div>

                        <Swiper
                            // breakpoints={{
                            //     320:{
                            //         slidesPerView:1,
                            //         spaceBetween:0
                            //     },
                            //     460:{
                            //         slidesPerView:1,
                            //         spaceBetween:0
                            //     },
                            //     660:{
                            //         slidesPerView:2,
                            //         spaceBetween:60
                            //     },
                            //     760:{
                            //         slidesPerView:3,
                            //     },
                            // }}
                        slidesPerView={'auto'}
                        spaceBetween={100}
                        freeMode={false}
                        modules={[FreeMode]}
                        >
                        {
                        x.map(data=>
                            <SwiperSlide className='category__swiper__slide' key={data.id}>
                                <CarsCard data={data}/>
                            </SwiperSlide>
                        )
                        }
                        </Swiper>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HomeCategory