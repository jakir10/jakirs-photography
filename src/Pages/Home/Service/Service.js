import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service mt-4'>
            <img className='w-100 h-50' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p className='description'><small>{description}</small></p>
            <div >
                <button onClick={() => navigateToServiceDetail(id)} className="btn btn-secondary">Hire me:{name}</button>
            </div>
        </div>
    );
};

export default Service;