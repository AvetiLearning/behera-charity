import React from 'react';
import { FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <img src={logo} alt="Behera Family Charity Foundation" className="h-16 w-auto object-contain" />
                    <span className="font-bold text-primary text-lg">Behera Family Charity Foundation</span>
                </div>

                <p className="text-text/50 text-sm mb-8 max-w-lg mx-auto">
                    From devotion to defiance - building pathways to progress.
                </p>

                <div className="text-xs text-text/40 flex items-center justify-center gap-1">

                    <span>&copy; 2025 Behera Family Charity Foundation. All rights reserved. Built with</span>
                    <FaHeart className="text-accent" />
                    <span>in Odisha by <a href="https://avetilearning.com/#/aboutus/labs" target="_blank" rel="noopener noreferrer">Aveti Learning</a>.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
