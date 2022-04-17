import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <p><small>&copy; copyright {new Date().getFullYear()}</small></p>
            </footer>
        </div>
    );
};

export default Footer;