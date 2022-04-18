import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service mt-4'>
            <img className='w-100 h-50' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p className='description'><small>{description}</small></p>
            <div >
                <button type="button" className="btn btn-secondary">Hire me:{name}</button>
            </div>
        </div>
    );
};

export default Service;