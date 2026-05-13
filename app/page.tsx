import React from 'react';
import Link from 'next/link';

export default function Home() {
  const exploreServices = [
    { title: 'Consult Now', icon: '🩺', color: 'text-blue-500' },
    { title: 'Order Now', icon: '💊', color: 'text-red-500' },
    { title: 'Upload Prescription', icon: '📸', color: 'text-orange-500' },
    { title: 'Book Lab Test', icon: '🧪', color: 'text-green-500' },
    { title: 'Clinic Appts', icon: '🏥', color: 'text-purple-500' },
    { title: 'Doctor Appts', icon: '📅', color: 'text-blue-400' },
  ];

  const specialities = [
    { name: 'General Physician', icon: '👤' },
    { name: 'Gynecologist', icon: '🤰' },
    { name: 'Orthopedic', icon: '🦴' },
    { name: 'Pediatrician', icon: '👶' },
    { name: 'Cardiologist', icon: '❤️' },
    { name: 'Dentist', icon: '🦷' },
    { name: 'Dietitian', icon: '🍎' },
    { name: 'Dermatologist', icon: '🧴' },
    { name: 'Physiotherapist', icon: '🏃' }
  ];

  const healthPackages = [
    { title: 'Basic Health Package', price: '₹999', icon: '🩺' },
    { title: 'Advance Body Check', price: '₹1999', icon: '🧬' },
    { title: 'Diabetes Care Package', price: '₹1499', icon: '🩸' },
  ];

  const whyFeatures = [
    { title: 'Verified Doctors', desc: '1000+ Specialists at your fingertips', icon: '✅' },
    { title: 'Accurate Lab Reports', desc: 'NABL accredited laboratory partners', icon: '📄' },
    { title: 'Affordable Medicines', desc: 'Flat 20% off on all home deliveries', icon: '💊' },
    { title: '100% Secure Data', desc: 'End-to-end encrypted medical records', icon: '🛡️' },
  ];

  const steps = [
    { title: 'Choose Service', desc: 'Select from Consultation, Lab Tests or Medicines', icon: '🔍' },
    { title: 'Book & Pay', desc: 'Securely book your slot and pay online', icon: '💳' },
    { title: 'Get To Care', desc: 'Receive top-quality care natively with live tracking', icon: '🏠' },
  ];

  const medicalStores = [
    { name: 'MediGhar Pharmacy', location: 'Gwalior Main', icon: '🏪' },
    { name: 'City Wellness Center', location: 'City Center', icon: '🏥' },
    { name: 'Local Verified Store', location: 'Hazira', icon: '✅' },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Refined Hero Banner */}
      <section className="relative w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-brand-primary to-brand-dark flex items-center px-8 md:px-20 shadow-xl mt-8">
        <div className="max-w-2xl text-left z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Healthcare <br /><span className="text-blue-200">Simplified</span> for You.
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium mb-8 max-w-md">
            MediGhar brings verified doctors and affordable medicines right to your doorstep.
          </p>
          <button className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
            Get Started
          </button>
        </div>
        {/* Abstract background element */}
        <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* 2. "Explore More" Grid with Improved Cards */}
      <section>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-heading">Explore More</h2>
          <p className="text-gray-500 mt-1">Our wide range of digital healthcare services</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {exploreServices.map((service, index) => (
            <Link 
              key={index}
              href={service.title === 'Order Now' ? '/orders' : '/consult'}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-sm"
            >
              <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="font-bold text-gray-heading text-sm md:text-base group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Featured Top Doctor Card */}
      <section>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-heading">Top Doctors</h2>
          <p className="text-gray-500 mt-1">Book appointments with our highly rated specialists</p>
        </div>

        <div className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-primary to-[#4285F4] p-1 shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="bg-white/10 backdrop-blur-md rounded-[1.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-white/20">
            <div className="text-white mb-6 md:mb-0">
              <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Featured Specialist</span>
              <h3 className="text-4xl font-bold mb-2">Dr. Sneha Gupta</h3>
              <p className="text-xl font-medium text-blue-100">MBBS, DNB – Pediatrics</p>
              <button className="mt-8 bg-white text-brand-primary px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Book Appointment
              </button>
            </div>
            
            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center text-brand-primary text-4xl font-black shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                SG
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 border-4 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialities Grid */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-heading">Consult Any Doctor You Need</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 mb-12">
          {specialities.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-600 group-hover:text-brand-primary text-center leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/consult" className="group flex items-center gap-2 border-2 border-brand-primary text-brand-primary font-bold py-3 px-10 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-300">
            View All Specialities
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* 5. Health Packages Grid */}
      <section className="bg-brand-light/30 -mx-4 md:-mx-8 lg:-mx-20 px-8 md:px-20 py-16 rounded-[3rem]">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-heading">Full Body Health Packages</h2>
          <p className="text-gray-500 mt-1">Preventive checkups for a healthier lifestyle</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {healthPackages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-blue-100 hover:border-brand-primary transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div className="text-4xl mb-6">{pkg.icon}</div>
              <h3 className="font-bold text-xl text-gray-heading mb-2">{pkg.title}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-black text-brand-primary">{pkg.price}</span>
                <span className="text-gray-400 text-sm line-through">₹2999</span>
              </div>
              <button className="w-full py-3 rounded-xl bg-brand-light text-brand-primary font-bold group-hover:bg-brand-primary group-hover:text-white transition-all">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. "WHY MEDIGHAR" Feature Section */}
      <section className="py-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-heading uppercase tracking-widest">Why MediGhar?</h2>
          <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {whyFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center mb-6 border border-gray-50 group-hover:bg-brand-primary transition-all duration-500">
                <span className="text-4xl group-hover:scale-110 transition-transform">{feature.icon}</span>
              </div>
              <h4 className="font-bold text-lg text-gray-heading mb-2 group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-gray-100 p-8 rounded-[2rem] text-center shadow-sm">
          <p className="text-lg text-gray-600 italic font-medium">
            "MediGhar brings complete healthcare to your home with <span className="text-brand-primary font-bold">safety, privacy, and absolute simplicity.</span>"
          </p>
        </div>
      </section>

      {/* 7. How MediGhar Works (The Process) */}
      <section className="py-16 bg-gray-50 -mx-4 md:-mx-8 lg:-mx-20 px-8 md:px-20 rounded-t-[3rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-heading">How MediGhar Works</h2>
          <p className="text-gray-500 mt-2">Simple 3-step process for your healthcare needs</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-primary/20 -z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative z-10 group">
              <div className="w-24 h-24 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <span className="text-3xl group-hover:scale-110 transition-transform">{step.icon}</span>
              </div>
              <h4 className="font-bold text-xl text-gray-heading mb-2">{step.title}</h4>
              <p className="text-gray-500 text-sm max-w-[200px]">{step.desc}</p>
              
              {/* Step Number Badge */}
              <div className="mt-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Step 0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Verified Medical Stores Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-heading">Verified Medical Stores</h2>
            <p className="text-gray-500 mt-1">Authorized partners delivering authentic medicines</p>
          </div>
          <button className="text-brand-primary font-bold hover:underline">View All Locations →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {medicalStores.map((store, index) => (
            <div key={index} className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-16 h-16 bg-brand-light/50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-brand-primary group-hover:text-white transition-all">
                {store.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-heading">{store.name}</h4>
                <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                  <span>📍</span> {store.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Simple Footer Branding */}
      <footer className="pt-20 pb-10 border-t border-gray-100 text-center">
        <div className="text-2xl font-black text-brand-primary mb-4">MediGhar</div>
        <p className="text-gray-400 text-sm">© 2026 MediGhar Healthcare Pvt. Ltd. All rights reserved.</p>
      </footer>

    </div>
  );
}
