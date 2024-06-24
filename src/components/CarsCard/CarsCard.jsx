import React from 'react';
import { Link } from "react-router-dom";

const CarsCard = () => {
    return (
        <div className="CarsCard">
            {/* <img src="" alt="" /> */}
            <h4 className="CarsCard-title">sadas</h4>
            <h3 className="CarsCard-price">sadsa</h3>
            <span>per day</span>

            <div>
                <Link to="https://wa.me/971558462124">WhatsApp</Link>
                <Link to="https://t.me/+971558462124">Telegram</Link>
            </div>
        </div>
    )
}

export default CarsCard;
