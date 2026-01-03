import React from 'react';
import { motion } from 'framer-motion';
import { FaBlind, FaFemale, FaChalkboardTeacher } from 'react-icons/fa';

const FocusCard = ({ icon: Icon, title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 hover:shadow-2xl transition-all duration-300 group"
        >
            <div className="w-14 h-14 bg-light-peach rounded-2xl flex items-center justify-center text-accent text-2xl mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Icon />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-text/70 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
};

const FocusAreas = () => {
    const areas = [
        {
            icon: FaBlind,
            title: "Education for Blind Children",
            description: "Supporting educational opportunities for visually impaired students through innovative learning tools and resources."
        },
        {
            icon: FaFemale,
            title: "Girl Empowerment",
            description: "Providing opportunities and support for girls and young women to achieve their full potential through education."
        },
        {
            icon: FaChalkboardTeacher,
            title: "Skilling of Blind Children",
            description: "Providing skill development programs for visually challenged youth to build independence and career opportunities."
        }
    ];

    return (
        <section className="py-20 bg-white" id="focus-areas">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Focus Areas</h2>
                    <p className="text-text/60 max-w-2xl mx-auto">
                        Our work focuses on three key areas to create lasting impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {areas.map((area, index) => (
                        <FocusCard key={index} {...area} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusAreas;
