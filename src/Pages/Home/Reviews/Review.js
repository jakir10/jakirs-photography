import React from 'react';

const Review = ({ review }) => {
    const { name, clientReview, img, rating } = review;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{clientReview}</p>
                    <p><small>Rating: {rating}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;