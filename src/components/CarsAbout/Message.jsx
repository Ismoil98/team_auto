import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'


const Message = () => {
    const Messager = (e) => {
        e.preventDefault();
        const token = "7402062434:AAFA_T8sjTdOkoE9IuJ1-Fy6n9GHnk3F2k4";
        const m_id = 5187415041;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
      
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const tel = formData.get('tel');
        const mess = formData.get('mess');

        
        if (name.length < 2) {
            Swal.fire({
              title: t('error'),
              text: t('name_too_short'),
              icon: 'error',
              confirmButtonText: t('ok')
            });
            return;
          }
      
          if (!name || !tel || !mess) {
            Swal.fire({
              title: t('error'),
              text: t('all fields required'),
              icon: 'error',
              confirmButtonText: t('ok')
            });
            return;
          }
      
        axios
          .post(url, {
            chat_id: m_id,
            text: `Name: ${name}\nTel: ${tel}\nMessage: ${mess}`,
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: t('message_sent'),
              icon: 'success',
              confirmButtonText: t('ok')
            });
            e.target.reset();
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: t('error'),
              text: t('message_not_sent'),
              icon: 'error',
              confirmButtonText: t('ok')
            });
          });
      };
  return (
    <div className='message d-flex'>
      <div className=" message__inner">
        <form id='form' onSubmit={Messager} className="bg-transparent border  text-white px-6 py-12  shadow-lg">
            <input type="text" name="name" id="name" placeholder={"Name"} className="bg-[#838383bd] text-white px-4 py-4  mb-6 w-full border" />
            <input type="tel" name="tel" id="tel" placeholder={"Phone"} className="bg-[#838383bd] text-white px-4 py-4  mb-6 w-full border" />
            <br />
            <input type="text" name="name" id="name" placeholder={"Period"} className="bg-[#838383bd] text-white px-4 py-4  mb-6 w-full border" />
            <input type="tel" name="tel" id="tel" placeholder={"Details"} className="bg-[#838383bd] text-white px-4 py-4  mb-6 w-full border" />
            <br />
            <button className="btn btn__message bg-red-600 hover:bg-red-700 text-white px-4 py-4 " type='submit'>{"sending"}</button>
        </form>
      </div>
    </div>
  )
}

export default Message
