import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Message from "../../components/CarsAbout/Message";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";

const carsAbout = () => {
  // const {id}= useParams();
  const id = "079162e0-01b7-428a-a02f-a6b0603998f0";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`)
      .then((res) => {
        console.log("data", res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const CustomSlide = ({ image, title }) => (
    <SwiperSlide className="slide-content d-flex items-center justify-center">
      <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </SwiperSlide>
  );

  return (
    <div className="container">
      <div className="first flex justify-between">
        <div className="swipers">
          <div></div>
          <div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-full h-full"
            >
              {data.car_images.map((image, index) => (
                <CustomSlide
                  key={index}
                  image={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${image.image.src}`}
                  title={image.title}
                />
              ))}
            </Swiper>
          </div>
        </div>

        <div className="infos w-1/2">
          <div className="flex items-start justify-between">
            <div className="border">
              <h4>AED 300 / $150</h4>
              <p>per day</p>
              <h4>AED / $</h4>
            </div>
            <div className="p-1">
              <div className="flex">
                <p>Deposit</p>
                <div className="div">
                  <h4>AED 0</h4>
                  <p>AED 0 for credit cards payment</p>
                </div>
              </div>
              <div className="flex">
                <p>Premium protection</p>
                <div className="div">
                  <h4>AED 0</h4>
                  <p>AED 0 price for 1 day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="flex justify-between items-start ">
          <div className="my-14  w-2/5">
            <h1 className="mb-6 text-3xl font-bold">{`Good to know about ${data.model.name} (${data.color})`}</h1>
            <p className="text-xs opacity-50">Kilometrage limit per day</p>
            <h4 className="text-xl font-bold mb-6">{`234(Every extra km will be charged 20 AED/km)`}</h4>
            <p className="text-xs opacity-50">Car rental deposit amount</p>
            <h4 className="text-xl font-bold mb-6">{`234(Every extra km will be charged 20 AED/km)`}</h4>
            <h4></h4>
          </div>
          <div className=" w-1/3">
            <div className="flex my-3 ">
              <div className="p-2">
                <FaTelegram />
              </div>
              <div className="p-2">
                <FaInstagram />
              </div>
              <div className="p-2">
                <FaFacebook />
              </div>
            </div>
            <Message />
            <div className="mt-5 flex flex-col gap-2">
              <p className="text-gray-500 text-[13px]">
                The price doesn't include additional 5% VAT.
              </p>
              <p className="text-gray-500 text-[13px]">
                There is a 3% transaction fee when paying by credit/debit card
              </p>
              <p className="text-gray-500 text-[13px]">
                There is a 7% transaction fee when paying with American Express.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="similar py-5">
        <h1 className="text-3xl">Similar offers</h1>
      </div>
    </div>
  );
};

export default carsAbout;
