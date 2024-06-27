import React, { useEffect, useState } from 'react'
import CarsCard from './CarsCard'

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

    
    console.log(maindata);
    console.log(carsdata);
    console.log(categories);
  return (
    <div>
        <div className='container'>
            <div>
                {
                    maindata.map(x=>(
                        <>
                        <div className='flex items-center justify-between mb-6'>
                            <h2 className='text-4xl text-white'>
                                {x[0].category.name_en}
                            </h2>

                            <button className='flex items-center text-white gap-2 text-xl group'>
                                See All
                                <span className='border-[1px] border-white flex items-center justify-center p-2 rounded-full transition-transform duration-300 group-hover:translate-x-5'>
                                    right
                                </span>
                            </button>
                        </div>

                        <div className='flex items-center gap-10'>
                        {
                        x.map(data=>
                            <div key={data.id}>
                                <CarsCard data={data}/>
                            </div>
                        )
                        }
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HomeCategory