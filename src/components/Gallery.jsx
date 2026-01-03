import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1577896337318-2838d1cd31f6?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1529390003868-b900985795eb?auto=format&fit=crop&q=80&w=600"
    ];

    return (
        <section className="py-20 bg-light" id="gallery">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-2">Gallery</h2>
                    <p className="text-text/60 text-sm">Moments from our journey of empowerment and transformation</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.03, zIndex: 10 }}
                            className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group aspect-square
                ${index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
                        >
                            <img
                                src={src}
                                alt="Gallery Item"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Memory</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
