import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Impact in Action</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/8WD3VhyZZzk"
                            title="Our Impact in Action"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;
