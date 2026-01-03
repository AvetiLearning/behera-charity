import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section className="py-20 bg-light relative" id="about">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>

                    <p className="text-lg lg:text-xl text-text leading-relaxed text-center">
                        <span className="font-bold text-primary">Behera Family Charity</span> is driven by a clear mission: to empower marginalized communities, with a particular focus on supporting the visually challenged, promoting girl empowerment, and enhancing educational opportunities. Led by visionary entrepreneur <span className="font-bold text-primary">Mr. Kiran Behera</span>, the foundation supports impactful initiatives in the U.S. and India.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
