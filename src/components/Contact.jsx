import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="py-20 bg-light-peach/30" id="contact">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                        <p className="text-lg text-text/80 leading-relaxed max-w-2xl mx-auto">
                            Behera Family Charity is on a mission to empower marginalized communities through education and inclusion. Together, we can make a lasting difference.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pt-8"
                    >
                        <h3 className="text-xl font-semibold text-primary mb-4">Get in Touch</h3>
                        <a
                            href="mailto:kbehera@aol.com"
                            className="inline-flex items-center gap-3 text-lg text-accent hover:text-accent/80 transition-colors font-medium bg-white px-8 py-4 rounded-full shadow-sm hover:shadow-md"
                        >
                            <FaEnvelope className="text-xl" />
                            kbehera@aol.com
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
