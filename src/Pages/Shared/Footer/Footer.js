import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=' text-white text-center mt-5 bg-dark py-2 '>
                <p className='py-2'><small>&copy; copyright {new Date().getFullYear()}</small></p>
            </footer>
        </div>
    );
};

export default Footer;