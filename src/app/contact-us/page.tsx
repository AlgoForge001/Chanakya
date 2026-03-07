import type { Metadata } from "next";
import { Mail, Phone, MapPin, ChevronRight, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const metadata: Metadata = {
    title: "Contact Us | Chanakya International School Palghar",
    description: "Get in touch with Chanakya International School in Palghar for admissions, campus tours, or general inquiries. Find our location, phone, and email details here.",
    keywords: ["Contact Chanakya School", "School Location Palghar", "School Admission Inquiry", "Chanakya School Phone"],
};
import { submitContactForm } from '@/app/actions/feedback';

export default function ContactUsPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);

        try {
            const result = await submitContactForm(formData);
            if (result.success) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to connect to the server.');
        }
    };

    return (
        <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
            {/* Hero Header */}
            <section className="bg-[#0A2351] py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-blue-100/70 font-inter max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out to our team for admissions, campus tours, or general inquiries.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Form Side */}
                        <div className="bg-[#F8F9FB] rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
                            {/* Decorative Phone Image Area - Inspired by User's Reference */}
                            <div className="md:w-1/3 flex flex-col items-center">
                                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
                                    <div className="relative z-10 text-red-500 transform group-hover:scale-110 transition-transform duration-500">
                                        <Phone size={80} strokeWidth={1} />
                                    </div>
                                </div>
                                <div className="mt-8 text-center hidden md:block">
                                    <h3 className="text-[#0A2351] font-black text-xl mb-2">Need support?</h3>
                                    <p className="text-slate-500 text-sm">Contact us if you need further assistance.</p>
                                </div>
                            </div>

                            {/* Actual Form */}
                            <div className="md:w-2/3 w-full">
                                {status === 'success' ? (
                                    <div className="h-full flex flex-col items-center justify-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-inner">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <div className="text-center space-y-2">
                                            <h3 className="text-2xl font-black text-[#0A2351] font-poppins">Request Received!</h3>
                                            <p className="text-slate-500 font-inter">
                                                Thank you for reaching out. Our team will get back to you shortly.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="text-[#0077B6] font-bold hover:underline font-poppins text-sm uppercase tracking-widest"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#0A2351] ml-1 uppercase tracking-wider">First Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Enter your name"
                                                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#0077B6] focus:ring-4 focus:ring-[#0077B6]/5 transition-all text-slate-700 font-inter"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#0A2351] ml-1 uppercase tracking-wider">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="yourname@gmail.com"
                                                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#0077B6] focus:ring-4 focus:ring-[#0077B6]/5 transition-all text-slate-700 font-inter"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#0A2351] ml-1 uppercase tracking-wider">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+91 00000 00000"
                                                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#0077B6] focus:ring-4 focus:ring-[#0077B6]/5 transition-all text-slate-700 font-inter"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#0A2351] ml-1 uppercase tracking-wider">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                placeholder="Please enter the details of your request..."
                                                rows={4}
                                                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#0077B6] focus:ring-4 focus:ring-[#0077B6]/5 transition-all text-slate-700 resize-none font-inter"
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-2xl text-sm font-medium animate-in slide-in-from-top-2 duration-300">
                                                <AlertCircle size={18} />
                                                {errorMessage}
                                            </div>
                                        )}

                                        <button
                                            disabled={status === 'loading'}
                                            type="submit"
                                            className={`w-full ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} text-white font-black py-4 rounded-2xl shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2 font-poppins`}
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Request
                                                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact Info Side */}
                        <div className="space-y-12">
                            <div>
                                <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Visit Us</span>
                                <h2 className="text-3xl font-black text-[#0A2351] font-poppins mb-6 leading-tight">Chanakya <br />International School</h2>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A2351] shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-600 leading-relaxed font-medium font-inter">
                                            Shirgaon, New Satpati Road,<br />
                                            Palghar (W) 401404, Maharashtra
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 text-[#0A2351]">
                                <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block font-poppins">Connect with Us</span>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A2351] shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1 font-poppins">Contact No.</p>
                                        <p className="font-black text-lg">+91 9730390599</p>
                                        <p className="font-black text-lg">+91 9730990599</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A2351] shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1 font-poppins">Email Addresses</p>
                                        <p className="font-black">chanakyatheglobalschool@gmail.com</p>
                                        <p className="font-black">info@chanakyatheglobalschool.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A2351] shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1 font-poppins">Office Hours</p>
                                        <p className="font-black leading-none">Mon - Sat: 9:00 AM - 5:00 PM</p>
                                        <p className="font-black">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section className="w-full h-[500px] relative bg-slate-100">
                <iframe
                    src="https://www.google.com/maps?q=Chanakya%20The%20Global%20School%20for%20Intellectuals,%20Shirgaon,%20Palghar&output=embed"
                    className="w-full h-full grayscale opacity-80"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 hidden md:block">
                    <h4 className="text-[#0A2351] font-black mb-2 font-poppins">Campus Location</h4>
                    <div className="flex items-center gap-2 text-slate-600 text-sm font-inter">
                        <MapPin size={16} className="text-blue-500" />
                        <span>Shirgaon, Palghar (W)</span>
                    </div>
                </div>
            </section>

        </main>
    );
}
