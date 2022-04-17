import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import wedding from '../../../images/banner/wedding.png';
import product from '../../../images/banner/product.png';
import tour from '../../../images/banner/tour.png';


const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wedding}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Wedding Photography</h3>
                    <p>I will capture your wedding moments and make it memoriable day for you.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={product}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Product Photography</h3>
                    <p>any kind of product like food,gadgets,handicraft etc i will photoshoot for your business to make atractive</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tour}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Tour Photography</h3>
                    <p>
                        I will capture your every moments of
                        your travel and make memories for your future.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;