import React, { useState } from 'react';

const services = [
    'Brand Identity',
    'Website',
    'E-Commerce',
    'UX/UI design',
    'Graphic design',
    'Marketing',
    'Other...'
];

export default function ContactFormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        selectedServices: [],
        ideas: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleService = (service) => {
        setFormData((prev) => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(service)
                ? prev.selectedServices.filter((item) => item !== service)
                : [...prev.selectedServices, service]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="w-full min-h-screen px-6  font-sans">
            <div className="w-full mx-auto">
                <form className="space-y-10" onSubmit={handleSubmit}>
                    {/* Top Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
                        <div>
                            <label className="block text-[22px] md:text-[24px]  tracking-tight mb-4 text-black">
                                Your name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="John"
                                name='name'
                                className="w-full h-[92px] rounded-xl border border-gray-300 bg-transparent px-8 text-[20px] outline-none placeholder:text-gray-300"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>

                        <div>
                            <label className="block text-[22px] md:text-[24px] tracking-tight mb-4 text-black">
                                Business name
                            </label>
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder="NextBigThing Inc."
                                className="w-full h-[92px] rounded-xl border border-gray-300 bg-transparent px-8 text-[20px] outline-none placeholder:text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-[22px] md:text-[24px]  tracking-tight mb-4 text-black">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="johndoe@gmail.com"
                                className="w-full h-[92px] rounded-xl border border-gray-300 bg-transparent px-8 text-[20px] outline-none placeholder:text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-[22px] md:text-[24px] tracking-tight mb-4 text-black">
                                Phone number
                            </label>
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="text"
                                placeholder="0612345678"
                                className="w-full h-[92px] rounded-xl border border-gray-300 bg-transparent px-8 text-[20px] outline-none placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight mb-5">Services</h3>
                        <div className="flex flex-wrap gap-4">
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => toggleService(service)}
                                    className={`px-6 py-3 cursor-pointer rounded-full transition-all duration-300 text-[18px] ${formData.selectedServices.includes(service)
                                        ? 'bg-black text-white'
                                        : 'bg-[#efefed] hover:bg-black hover:text-white'
                                        }`}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Textarea */}
                    <div>
                        <label className="block text-[22px] md:text-[24px] tracking-tight mb-4 text-black">
                            Tell us about your ideas <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            rows="8"
                            value={formData.ideas}
                            onChange={handleChange}
                            placeholder="Rebrand, design, new website..."
                            className="w-full rounded-xl border border-gray-300 bg-transparent px-8 py-7 text-[20px] outline-none resize-none placeholder:text-gray-300"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-8 py-4 bg-black text-white rounded-full cursor-pointer mb-10"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
