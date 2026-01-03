import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import heroImg from '../assets/images/hero.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 xl:pt-40 xl:pb-28 overflow-hidden bg-gradient-to-br from-light-peach to-light">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 lg:space-y-8"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                        Behera Family Charity Foundation
                    </h1>
                    <p className="text-base lg:text-lg text-text/80 max-w-lg leading-relaxed">
                        Empowering Lives Throught Educaiton and Inclusion.
                    </p>

                    <div className="pl-6 border-l-4 border-accent italic text-gray-600 text-sm lg:text-base">
                        "Each tablet is a step closer to a brighter more inclusive future."
                        <span className="block text-blue-600 font-bold not-italic mt-2">- Kirtan Behera</span>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button className="text-sm lg:text-base px-5 py-2.5">Get Involved</Button>
                        <Button variant="outline" className="text-sm lg:text-base px-5 py-2.5">Learn More</Button>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative max-w-md lg:max-w-full mx-auto"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

                    <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/3] group">
                        <img
                            src={heroImg}
                            alt="Children learning in a classroom"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
