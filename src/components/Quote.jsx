import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Quote = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const quotes = [
        {
            text: "Each tablet is a step closer to a brighter, more inclusive future.",
            author: "Kirtan Behera"
        },
        {
            text: "I believe every child, regardless of sight, deserves the chance to dream big. Seeing these students embrace learning with confidence through our tablets shows me that access to education can truly change lives.",
            author: "Kirtan Behera"
        },
        {
            text: "Education is the foundation for a brighter future, and I believe every child, regardless of their circumstances, deserves the opportunity to learn and grow. Technology has the power to bridge gaps, and it’s our responsibility to make it accessible to all.",
            author: "Kirtan Behera"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length);
        }, 5000); // Change quote every 5 seconds

        return () => clearInterval(timer);
    }, [quotes.length]);

    return (
        <section className="py-24 bg-gradient-to-br from-light-peach/50 to-white relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="text-accent text-5xl mb-6 flex justify-center opacity-80">
                    <FaQuoteLeft />
                </div>

                <div className="h-[300px] md:h-[200px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif italic text-text/80 mb-8 leading-relaxed">
                                "{quotes[currentIndex].text}"
                            </h2>

                            <div className="flex flex-col items-center">
                                <span className="font-bold text-primary text-lg">- {quotes[currentIndex].author}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination dots */}
                <div className="flex gap-2 justify-center mt-8">
                    {quotes.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to quote ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quote;
