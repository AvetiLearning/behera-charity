import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="py-20 bg-white" id="contact">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
                    <p className="text-text/60 max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have questions about our work, want to get involved, or need more information, please reach out.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-light p-8 rounded-3xl"
                    >
                        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">
                                <FaPaperPlane />
                            </span>
                            Get in Touch
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Name</label>
                                <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Email</label>
                                <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Message</label>
                                <textarea rows="4" placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"></textarea>
                            </div>
                            <Button className="w-full justify-center">Send Message</Button>
                        </form>
                    </motion.div>

                    {/* Info Card */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-text">Email</h4>
                                    <p className="text-accent hover:underline cursor-pointer">info@beherafamilyfoundation.org</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-primary/5 p-8 rounded-3xl"
                        >
                            <h3 className="text-xl font-bold text-primary mb-4 text-accent">Our Mission</h3>
                            <p className="text-text/80 leading-relaxed">
                                Behera Family Charity is on a mission to empower marginalized communities through education and inclusion. Together, we can make a lasting difference.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
