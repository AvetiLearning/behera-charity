import React from 'react';
import { motion } from 'framer-motion';

import bhubaneswarImg from '../assets/images/Bhubaneswar.png';
import cuttackImg from '../assets/images/Cuttack.png';
import khordhaImg from '../assets/images/Khordha.png';
import berhampurImg from '../assets/images/Berhampur.png';
import rourkelaImg from '../assets/images/Rourkela.png';
import sambalpurImg from '../assets/images/Sambalpur.png';
import sundargarhImg from '../assets/images/Sundargarh.png';
import keonjharImg from '../assets/images/Keonjhar.png';
import mayurbhanjaImg from '../assets/images/Mayurbhanja.png';
import bhawanipatnaImg from '../assets/images/Bhawanipatna.png';
import balasoreImg from '../assets/images/Balasore.png';
import bhadrakImg from '../assets/images/Bhadrak.png';

const ProjectContent = ({ title, description, schools }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
    >
        <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
            <p className="text-text/70 leading-relaxed">{description}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {schools.map((school, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col group">
                    <div className="h-48 overflow-hidden relative">
                        <img
                            src={school.image}
                            alt={school.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                        {/* Number Badge */}
                        <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-primary text-xs font-bold transition-all duration-300 group-hover:scale-110 z-10">
                            {(idx + 1).toString().padStart(2, '0')}
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-center">
                        <div className="">
                            <h4 className="font-semibold text-text text-sm leading-tight mb-1">{school.name}</h4>
                            <p className="text-xs text-text/60 font-medium italic">{school.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const Projects = () => {
    const schoolsList = [
        { name: "Louis Braille School for the Blind", location: "Bharatpur, Bhubaneswar", image: bhubaneswarImg },
        { name: "School for the Blind ", location: "CDA-10, Cuttack", image: cuttackImg },
        { name: "NSS Special School for the Blind", location: "Banapur, Khordha", image: khordhaImg },
        { name: "Redcross School for the Blind", location: "Ambapua, Berhampur", image: berhampurImg },
        { name: "Radhakanta Dristihina Vidyalaya", location: "Lathikat, Rourkela", image: rourkelaImg },
        { name: "Govt School for the Blind", location: "Burla, Sambalpur", image: sambalpurImg },
        { name: "School for the Blind", location: "Bandhapali, Sundargarh", image: sundargarhImg },
        { name: "Manoj Manjari School for the Blind", location: "Sidhamatha, Keonjhar", image: keonjharImg },
        { name: "Special School for the Blind", location: "Laxmiposi, Mayurbhanj", image: mayurbhanjaImg },
        { name: "Redcross School for the Blind", location: "Paramanandapur, Bhawanipatna", image: bhawanipatnaImg },
        { name: "School for the Blind", location: "Ranipatna, Balasore", image: balasoreImg },
        { name: "Vijaya School for the Blind", location: "Langudi, Bhadrak", image: bhadrakImg }
    ];

    const projectData = {
        title: "Blind School Project – Transforming Education for Visually Impaired Students in Odisha",
        description: "In 2022, the Behera Family Charity Foundation partnered with Promise a Future and Aveti Learning to revolutionize education for visually impaired students in Odisha. Through tablet-based learning solutions, we’re providing cutting-edge assistive technology that enables blind children to access quality education and develop essential skills for their future.",
        schools: schoolsList
    };

    return (
        <section className="py-20 bg-light" id="projects">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-2">A New Vision</h2>
                    <p className="text-sm text-text/50">Digital Learning for the Blind</p>
                </div>

                {/* Content */}
                <div className="min-h-[400px]">
                    <ProjectContent {...projectData} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
