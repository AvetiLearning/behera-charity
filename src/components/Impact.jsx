import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const StatCard = ({ count, label, description, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            // Extract number and possible suffix (e.g., "195+" -> 195 and "+")
            const numericValue = parseInt(count);
            const suffix = count.replace(numericValue.toString(), '');

            const controls = animate(0, numericValue, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (value) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(value) + suffix;
                    }
                }
            });

            return () => controls.stop();
        }
    }, [isInView, count]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl border border-gray-100 text-center hover:transform hover:scale-105 transition-transform duration-300 flex flex-col items-center h-full"
        >
            <h3 className="text-4xl lg:text-5xl font-bold text-accent mb-3">
                <span ref={ref}>0</span>
            </h3>
            <p className="text-primary font-semibold text-lg mb-3">{label}</p>
            <p className="text-text/70 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
        </motion.div>
    );
};

const Impact = () => {
    return (
        <section className="py-20 bg-white" id="impact">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Impact in Action</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {[
                        {
                            count: "12",
                            label: "Number of Schools",
                            description: "Partnering with schools to make learning more accessible and inclusive for visually impaired students.",
                            delay: 0
                        },
                        {
                            count: "96",
                            label: "Trained Teachers",
                            description: "Empowering educators with tools and training to teach confidently using assistive technology.",
                            delay: 0.2
                        },
                        {
                            count: "271",
                            label: "Number of Students",
                            description: "Students actively learning, exploring, and growing through accessible digital education.",
                            delay: 0.4
                        },
                        {
                            count: "195+",
                            label: "Hour of Content",
                            description: "Curated learning content designed for clarity, engagement, and long-term impact.",
                            delay: 0.6
                        }
                    ].map((stat, idx) => (
                        <StatCard key={idx} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
