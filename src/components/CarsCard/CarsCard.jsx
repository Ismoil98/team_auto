import React from 'react';
import { Link } from "react-router-dom";
// import { FaWhatsapp, FaTelegram } from "react-icons/fa";


const CarsCard = ({ url, id, image, brand, model, priceAED, priceUSD }) => {
    return (
        <div className="CarsCard w-[95%] p-8 rounded-2xl m-4 border border-solid border-[#ffffff2f]">
            <Link to={`${url}/${id}`} className="flex justify-between flex-col">
                <div className="flex justify-center items-center mb-10 h-[200px]">
                    <img
                        className="w-[100%]"
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
                <Link className="bg-[#00c600] text-white px-6 py-4 rounded-xl" to="https://wa.me/971558462124">
                    {/* <FaWhatsapp /> */}
                    WhatsApp
                </Link>

                <Link className="bg-[#2727e0] text-white px-6 py-4 rounded-xl" to="https://t.me/+971558462124">
                    {/* <FaTelegram /> */}
                    Telegram
                </Link>
            </div>
        </div>
    )
}

export default CarsCard;
