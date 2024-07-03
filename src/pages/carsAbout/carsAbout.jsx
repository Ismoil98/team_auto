import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const carsAbout = () => {
  // const {id}= useParams();
  const id = "d1570c36-cbc1-40aa-b05f-dce903204c9c";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`)
      .then((res) => {
        console.log(res.data.data.car_images);
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
        <div className="first">
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
          <div className="infos"></div>
        </div>
      </div>
    );
};

export default carsAbout;
