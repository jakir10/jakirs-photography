import React from 'react';

import review1 from '../../../images/reviews/review-1.jpg';
import review2 from '../../../images/reviews/review-2.jpg';
import review3 from '../../../images/reviews/review-3.jpg';

import Review from './Review';







const reviews = [
    {
        id: 1, name: 'Jhon wick', clientReview: "I hierd him for my wedding ceremony and I'm glad to say that his work was awesome.", img: review1, rating: "9/10"
    },
    { id: 2, name: 'Jennfer lawrence', clientReview: 'I have a small buisness.so i hired him for my product photography and his the best photographer.', img: review2, rating: "8/10" },
    { id: 3, name: 'Jhon wick', clientReview: 'I hired him for photoshoot for our tour.and he is best in his work.Highly recommended.', img: review3, rating: "9/10" },
]

const Reviews = () => {
    return (
        <div id='reviewsClient' className='container'>
            <h2 className='text-center'>Client Reviews</h2>
            <div className="row text-center">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;