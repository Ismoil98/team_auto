/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";


const CarsCard = ({ id, image, brand, model, priceAED, priceUSD }) => {
    return (
        <div className="CarsCard w-[95%] py-5 px-5 rounded-2xl m-4 border border-solid border-[#ffffff2f]">
            <Link to={`/cars/${id}`} className="flex justify-between flex-col">
                <div className="flex justify-center items-center mb-10 h-[200px]">
                    <img
                        className="w-[90%]"
                        src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${image}`}
                        alt={image}
                    />
                </div>

                <div>
                    <h4 className="CarsCard-title pb-3 border-b border-[#ffffff63] text-xl text-white">{brand} {model}</h4>
                    <div className="flex items-center mt-3">
                        <h3 className="CarsCard-priceAED text-white mr-2">AED {priceAED}</h3>
                        <h3 className="CarsCard-priceUSD text-[#9e9a9a] ">/ $ {priceUSD}</h3>
                    </div>
                </div>

                <span className="text-[#b3b2b2] mt-5 mb-16">per day</span>
            </Link>

            <div className="w-[100%] flex items-center justify-between">
                <Link className="w-[47%] text-md flex items-center justify-between bg-[#00c600] text-white px-4 py-4 rounded-xl" to="https://wa.me/971558462124">
                    {/* <FaWhatsapp  /> */}
                    <MdWhatsapp className="size-5" />
                    WhatsApp
                </Link>

                <Link className="w-[47%] text-md flex items-center justify-between bg-[#2727e0] text-white px-4 py-4 rounded-xl" to="https://t.me/+971558462124">
                    <FaTelegram className="size-5" />
                    Telegram
                </Link>
            </div>
        </div>
    )
}

export default CarsCard;
