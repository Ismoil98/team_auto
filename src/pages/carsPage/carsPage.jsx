import React, { useEffect, useState } from 'react'
import CarsCard from "../../components/CarsCard/CarsCard";

const carsPage = () => {

	const [ cars, setCars ] = useState([]);
	const [ category, setCategory ] = useState([]);
	const [ brand, setBrand ] = useState([]);
	const [ model, setModel ] = useState([]);

	const API = "https://autoapi.dezinfeksiyatashkent.uz/api";

	const getBrands = () => {
		fetch(`${API}/brands`)
			.then((response) => response.json())
			.then((res) => setBrand(res.data))
			.catch((err) => console.log(err))
	}

	const getCategories = () => {
		fetch(`${API}/categories`)
			.then((response) => response.json())
			.then((res) => setCategory(res.data))
			.catch((err) => console.log(err))
	}

	const getModels = () => {
		fetch(`${API}/models`)
			.then((response) => response.json())
			.then((res) => setModel(res.data))
			.catch((err) => console.log(err))
	}

	const getCars = () => {
		fetch(`${API}/cars`)
			.then((response) => response.json())
			.then((res) => setCars(res.data))
			.catch((err) => console.log(err))
	}
	
	
	useEffect(() => {
		getCategories()
		getBrands()
		getModels()
		getCars()
	}, []);

	return (
		<div className="carsPage flex justify-between">
			<div className="w-full flex">
				<div className="overlay py-20 px-8 w-[25%]  bg-[#272933]">
					<h3 className="font-semibold text-white pb-12 text-2xl">Filter By</h3>

					<ul className="mb-12">
						<h4 className="text-2xl text-white pb-6">Offers</h4>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check1" id="check1" />
							<label htmlFor="check1" className="text-white ml-3 cursor-pointer">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
						</li>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check2" id="check2" />
							<label htmlFor="check2" className="text-white ml-3 cursor-pointer">3 DAYS RENT = 1300 AED🔥 ()</label>
						</li>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check3" id="check3" />
							<label htmlFor="check3" className="text-white ml-3 cursor-pointer">3 DAYS RENT = 1800 AED🔥</label>
						</li>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check4" id="check4" />
							<label htmlFor="check4" className="text-white ml-3 cursor-pointer">NO DEPOSIT</label>
						</li>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check5" id="check5" />
							<label htmlFor="check5" className="text-white ml-3 cursor-pointer">5000 AED🔥 ALL INCLUSIVE</label>
						</li>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check6" id="check6" />
							<label htmlFor="check6" className="text-white ml-3 cursor-pointer">2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
						</li>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check7" id="check7" />
							<label htmlFor="check7" className="text-white ml-3 cursor-pointer">Rent Ferrari Dubai</label>
						</li>

						<li className="flex items-center pb-6">
							<input className="cursor-pointer size-4" type="checkbox" name="check8" id="check8" />
							<label htmlFor="check8" className="text-white ml-3 cursor-pointer">4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
						</li>
					</ul>

					<ul className="mb-12">
						<h4 className="text-2xl text-white pb-6">Car type</h4>
						{
							category.map((el, index) => (
								<li key={index} className="flex items-center pb-6">
									<input className="cursor-pointer size-4" type="checkbox" name={`car${index}`} id={`car${index}`} />
									<label htmlFor={`car${index}`} className="text-white ml-3 cursor-pointer">{el.name_en}</label>
								</li>
							))
						}
					</ul>

					<ul className="mb-12">
						<h4 className="text-2xl text-white pb-6">Brand</h4>
						{
							brand.map((el, index) => (
								<li key={index} className="flex items-center pb-6">
									<input className="cursor-pointer size-4" type="checkbox" name={`brand${index}`} id={`brand${index}`}/>
									<label htmlFor={`brand${index}`} className="text-white ml-3 cursor-pointer">{el.title}</label>
								</li>
							))
						}
					</ul>

					<h4 className="text-2xl text-white pb-6">Model</h4>
					<select className="mb-10 px-4 py-5 block w-full outline-none rounded-lg cursor-pointer" name="models" id="models">
						{
							model.map((el, index) => (
								<option key={index} className="cursor-pointer p-4" value={el.brand_title}>{el.brand_title}</option>
							))
						}
					</select>

					<button className="text-white px-10 py-5 border rounded-xl">Reset</button>
					<button className="text-white px-10 py-5">Apply filter</button>
				</div>

				<div className="main w-[80%] grid grid-cols-3 grid-rows-5 container">
					{
						cars.map((el, index) => (
							<CarsCard
								key={index}
								url={API}
								id={el.brand.id}
								brand={el.brand.title}
								model={el.model.name}
								image={el.car_images[0].image.src}
								priceAED={el.price_in_aed}
								priceUSD={el.price_in_usd}
							/>
						))
					}
					
				</div>
			</div>
		</div>
	)
}

export default carsPage