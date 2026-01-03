import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
        secondary: "bg-accent text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-gray-100",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
