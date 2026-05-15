"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Stethoscope, Baby, Bone, Heart, Smile, Apple, Sparkles, Activity, ShieldPlus, Syringe, TestTube, Pill, Camera, FlaskConical, Hospital, Calendar, UserPlus, CheckCircle, Video, Shield, FileText, ShieldCheck, HeartPulse, ClipboardCheck, Headset, Upload, UserCheck, MapPin, Store, CalendarCheck } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  // --- New Slider Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/slide1.png',
    '/assets/slide2.png',
    '/assets/slide3.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Changes slide every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);
  // ------------------------

  // --- New Top Doctors Slider Logic ---
  const [doctorIndex, setDoctorIndex] = useState(0);
  
  const topDoctors = [
    { 
      name: 'Dr. Sneha Gupta', 
      specialty: 'MBBS, DNB – Pediatrics', 
      initials: 'SG', 
      statusColor: 'bg-green-500' 
    },
    { 
      name: 'Dr. Rahul Sharma', 
      specialty: 'MD, DM – Cardiology', 
      initials: 'RS', 
      statusColor: 'bg-blue-500' 
    },
    { 
      name: 'Dr. Priya Desai', 
      specialty: 'MS – Orthopedics', 
      initials: 'PD', 
      statusColor: 'bg-orange-500' 
    }
  ];

  useEffect(() => {
    const docTimer = setInterval(() => {
      setDoctorIndex((prevIndex) => (prevIndex + 1) % topDoctors.length);
    }, 4000); // Changes doctor every 4 seconds
    return () => clearInterval(docTimer);
  }, [topDoctors.length]);
  // --- How MedyGhar Works Accordion Logic ---
  const [expandedStep, setExpandedStep] = useState(0);
  
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setExpandedStep((prev) => (prev + 1) % 3); // Based on 3 steps
    }, 4500);
    return () => clearInterval(stepTimer);
  }, []);
  // -------------------------------------------

  const exploreServices = [
    { title: 'Consult Now', icon: <Stethoscope className="w-10 h-10 text-blue-600" />, href: '/consult' },
    { title: 'Order Now', icon: <Pill className="w-10 h-10 text-red-500" />, href: '/orders/search' },
    { title: 'Upload Prescription', icon: <Camera className="w-10 h-10 text-gray-600" />, href: '/orders/search' },
    { title: 'Book Lab Test', icon: <TestTube className="w-10 h-10 text-green-500" />, href: '/orders/search' },
    { title: 'Clinic Appts', icon: <Hospital className="w-10 h-10 text-purple-600" />, href: '/clinics' },
    { title: 'Doctor Appts', icon: <Calendar className="w-10 h-10 text-blue-500" />, href: '/appointments' },
  ];

  const specialities = [
    { name: 'Physician', icon: <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
    { name: 'Dermatologist', icon: <ShieldPlus className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
    { name: 'Gynecologist', icon: <Baby className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
    { name: 'Pediatrician', icon: <Smile className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
    { name: 'Orthopedician', icon: <Bone className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
    { name: 'Neurologist', icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
    { name: 'Nutritionist', icon: <Apple className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
    { name: 'Dentist', icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> }
  ];

  const healthPackages = [
    { title: 'Basic Health Package', icon: <Activity className="w-10 h-10 text-blue-600" /> },
    { title: 'Advance Body Check', icon: <ShieldCheck className="w-10 h-10 text-blue-600" /> },
    { title: 'Diabetes Care Package', icon: <ClipboardCheck className="w-10 h-10 text-blue-600" /> },
  ];

  const steps = [
    { 
      title: 'Choose Service', 
      desc: 'Browse through our wide range of healthcare services.', 
      icon: <Headset className="w-8 h-8" /> 
    },
    { 
      title: 'Upload or Book', 
      desc: 'Easily upload prescriptions or book appointments.', 
      icon: <Upload className="w-8 h-8" /> 
    },
    { 
      title: 'Get To Care', 
      desc: 'Receive top-quality care natively with live tracking.', 
      icon: <UserCheck className="w-8 h-8" /> 
    },
  ];

  const medicalStores = [
    { name: 'Choose Service', icon: <MapPin className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'MedyGhar Pharmacy', icon: <Store className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Local Verified', icon: <CalendarCheck className="w-8 h-8 md:w-10 md:h-10" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        
        {/* 1. Ultra-Wide Hero Banner (Optimized Height) */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] px-4 md:px-6 pt-[18px] pb-10">
          <div className="relative w-full max-w-[1600px] h-[450px] md:h-[580px] rounded-[3rem] overflow-hidden flex items-center justify-center shadow-2xl bg-blue-900 mx-auto">
          
          {/* Background Images with Fade Effect */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            >
              {/* Dark overlay to make the text pop */}
              <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
            </div>
          ))}

          <div className="relative max-w-3xl text-center mx-auto z-10">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Healthcare <br /><span className="text-blue-200">Simplified</span> for You.
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-medium mb-10 max-w-xl mx-auto">
              MedyGhar brings verified doctors and affordable medicines right to your doorstep.
            </p>

          </div>
        </div>
      </section>

        {/* Wrapper for the rest of the content to maintain standard width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-20 mb-24">

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
                href={service.href}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-sm"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-heading text-xs md:text-sm group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Featured Top Doctor Card (Vertical Slider) */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Top Doctors</h2>
            <p className="text-gray-500 mt-1">Book appointments with our highly rated specialists</p>
          </div>

          <div className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-[#4285F4] p-1 shadow-lg hover:shadow-2xl transition-all duration-500 h-[350px] md:h-[280px]">
            {topDoctors.map((doc, index) => {
              let positionClass = 'translate-y-full opacity-0 z-0';
              if (index === doctorIndex) {
                positionClass = 'translate-y-0 opacity-100 z-10';
              } else if (index === (doctorIndex + 1) % topDoctors.length) {
                positionClass = '-translate-y-full opacity-0 z-0';
              }

              return (
                <div 
                  key={index} 
                  className={`absolute inset-1 bg-white/10 backdrop-blur-md rounded-[1.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-white/20 transition-all duration-700 ease-in-out ${positionClass}`}
                >
                  <div className="text-white mb-6 md:mb-0 w-full md:w-2/3">
                    <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Featured Specialist</span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{doc.name}</h3>
                    <p className="text-lg md:text-xl font-medium text-blue-100">{doc.specialty}</p>
                    <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                      Book Appointment
                    </button>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center text-blue-600 text-3xl md:text-4xl font-black shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      {doc.initials}
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 ${doc.statusColor} border-4 border-white rounded-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Specialities Grid */}
        <section className="px-4 md:px-0">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Consult Any Doctor You Need</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mb-10 max-w-5xl mx-auto">
            {specialities.map((item, index) => (
              <Link 
                key={index} 
                href={`/consult?speciality=${item.name.toLowerCase()}`}
                className="flex flex-col items-center justify-start text-center cursor-pointer group"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl border border-gray-200 bg-white shadow-sm flex items-center justify-center mb-3 group-hover:border-blue-600 group-hover:shadow-md transition-all">
                  {item.icon}
                </div>
                <span className="text-[11px] md:text-sm font-semibold text-gray-700 leading-tight group-hover:text-blue-600 max-w-[80px] md:max-w-none">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/consult" className="border-2 border-blue-600 text-blue-600 font-bold py-2.5 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm md:text-base">
              View all Specialists →
            </Link>
          </div>
        </section>

        {/* 5. Health Packages */}
        <section className="px-4 md:px-0 mt-12 mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-gray-800">Full Body Health Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {healthPackages.map((pkg, index) => (
              <Link 
                key={index} 
                href="/health-packages"
                className="flex items-center gap-6 p-8 md:p-10 border-2 border-gray-100 rounded-[2.5rem] bg-white hover:border-blue-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer group h-full shadow-sm"
              >
                <div className="text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {pkg.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                  {pkg.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. WHY MEDYGHAR */}
        <section className="py-20 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-20 tracking-wider uppercase text-center">WHY MEDYGHAR</h2>
          <div className="relative w-full max-w-[340px] md:max-w-[550px] aspect-square mb-20 flex items-center justify-center">
            <div className="relative z-30 flex flex-col items-center justify-center bg-white p-4 rounded-full">
              <div className="relative w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-blue-500">
                <HeartPulse className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                <div className="absolute inset-[-10px] md:inset-[-15px] border-2 border-dashed border-blue-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
              </div>
              <span className="mt-4 font-black text-gray-800 text-sm md:text-lg">MedyGhar</span>
            </div>
            <svg className="absolute inset-0 w-full h-full -z-0" viewBox="0 0 550 550">
              <line x1="140" y1="140" x2="275" y2="275" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="410" y1="140" x2="275" y2="275" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="140" y1="410" x2="275" y2="275" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="410" y1="410" x2="275" y2="275" stroke="#E5E7EB" strokeWidth="2" />
            </svg>
            {/* Feature Circles */}
            <div className="absolute top-0 left-[-10px] md:left-0 w-[130px] h-[130px] md:w-[240px] md:h-[240px] bg-white rounded-full shadow-xl md:shadow-2xl flex flex-col items-center justify-center border border-gray-100/50 z-10 transition-transform hover:scale-105 duration-300">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-1 md:mb-3">
                <Stethoscope className="w-5 h-5 md:w-8 md:h-8 text-blue-600" />
              </div>
              <span className="font-bold text-gray-800 text-[10px] md:text-sm max-w-[80px] md:max-w-[120px] text-center leading-tight">Verified Doctors</span>
            </div>
            <div className="absolute top-0 right-[-10px] md:right-0 w-[130px] h-[130px] md:w-[240px] md:h-[240px] bg-white rounded-full shadow-xl md:shadow-2xl flex flex-col items-center justify-center border border-gray-100/50 z-10 transition-transform hover:scale-105 duration-300">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-1 md:mb-3">
                <FileText className="w-5 h-5 md:w-8 md:h-8 text-orange-500" />
              </div>
              <span className="font-bold text-gray-800 text-[10px] md:text-sm max-w-[80px] md:max-w-[120px] text-center leading-tight">Accurate Lab Reports</span>
            </div>
            <div className="absolute bottom-0 left-[-10px] md:left-0 w-[130px] h-[130px] md:w-[240px] md:h-[240px] bg-white rounded-full shadow-xl md:shadow-2xl flex flex-col items-center justify-center border border-gray-100/50 z-10 transition-transform hover:scale-105 duration-300">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-green-50 rounded-full flex items-center justify-center mb-1 md:mb-3">
                <Pill className="w-5 h-5 md:w-8 md:h-8 text-green-500" />
              </div>
              <span className="font-bold text-gray-800 text-[10px] md:text-sm max-w-[80px] md:max-w-[120px] text-center leading-tight">Affordable Medicines</span>
            </div>
            <div className="absolute bottom-0 right-[-10px] md:right-0 w-[130px] h-[130px] md:w-[240px] md:h-[240px] bg-white rounded-full shadow-xl md:shadow-2xl flex flex-col items-center justify-center border border-gray-100/50 z-10 transition-transform hover:scale-105 duration-300">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-red-50 rounded-full flex items-center justify-center mb-1 md:mb-3">
                <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-red-500" />
              </div>
              <span className="font-bold text-gray-800 text-[10px] md:text-sm max-w-[80px] md:max-w-[120px] text-center leading-tight">100% Secure Data</span>
            </div>
          </div>
          <p className="text-gray-500 text-center max-w-lg px-6 text-sm md:text-lg font-medium leading-relaxed">
            MedyGhar brings complete healthcare to your home with <span className="text-gray-700">safety, privacy, and absolute simplicity.</span>
          </p>
        </section>

        {/* 7. How MedyGhar Works */}
        <section className="py-20 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800">How MedyGhar Works</h2>
            <p className="text-gray-500 mt-3 text-lg">Simple 3-step process for your healthcare needs</p>
          </div>
          <div className="flex flex-col md:flex-row w-full max-w-6xl h-[600px] md:h-[380px] gap-3 md:gap-6 px-4 justify-center">
            {steps.map((step, index) => {
              let order = 1;
              if (index === expandedStep) order = 1;
              else if (index === (expandedStep + 1) % 3) order = 2;
              else order = 0;

              return (
                <div
                  key={index}
                  onClick={() => setExpandedStep(index)}
                  style={{ order }}
                  className={`relative overflow-hidden rounded-[3rem] border-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.4,1)] cursor-pointer flex items-center
                    ${expandedStep === index 
                      ? 'flex-[35] md:flex-[35] bg-white border-blue-100 shadow-2xl' 
                      : 'flex-[1] md:flex-[1] bg-gray-50/30 border-transparent opacity-30 hover:opacity-60 justify-center'
                    }`}
                >
                  <div className={`flex flex-col md:flex-row items-center w-full px-6 md:px-16 py-8 md:py-0 gap-6 md:gap-16 transition-all duration-700 absolute inset-0
                    ${expandedStep === index ? 'opacity-100 scale-100 pointer-events-auto translate-y-0 md:translate-x-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-10 md:translate-y-0 md:-translate-x-10'}`}>
                    <div className="flex-1 md:flex-[2] flex items-center justify-center">
                      <div className="w-24 h-24 md:w-56 md:h-56 bg-blue-600 rounded-[2rem] md:rounded-[3.5rem] flex items-center justify-center shadow-2xl rotate-6 transform hover:rotate-0 transition-transform duration-700">
                        <span className="text-6xl md:text-9xl font-black text-white leading-none select-none">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-[2] md:flex-[3] flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-blue-600 shadow-inner">
                        {step.icon}
                      </div>
                      <h4 className="text-2xl md:text-5xl font-black text-gray-800 mb-2 md:mb-4 tracking-tight">{step.title}</h4>
                      <p className="text-gray-500 text-sm md:text-xl leading-relaxed max-w-[450px]">{step.desc}</p>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center w-full h-full transition-opacity duration-500 absolute inset-0
                    ${expandedStep === index ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                    <div className="w-16 h-1.5 md:w-2 md:h-24 bg-gray-200 rounded-full text-transparent">.</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. Verified Medical Stores */}
        <section className="py-12 px-4 md:px-0 flex flex-col md:flex-row items-center gap-6 md:gap-20 overflow-hidden relative">
          <div className="flex-1 md:text-left text-center z-10 w-full mb-10 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 leading-[0.95] tracking-tighter uppercase">
              Verified <br /> <span className="text-blue-600">Medical</span> <br /> <span>Stores</span>
            </h2>
            <p className="text-gray-500 mt-4 md:mt-6 text-sm md:text-xl font-medium max-w-sm md:max-w-md mx-auto md:mx-0 leading-relaxed">
              Our authorized partners ensuring <span className="text-gray-800">authentic medicine delivery</span> with live tracking and verified safety protocols.
            </p>

          </div>
          <div className="flex-1 w-full min-h-[350px] md:min-h-[550px] flex items-center justify-center relative z-20">
            <div className="relative w-full h-[350px] md:h-full max-w-[350px] md:max-w-[500px]">
              {medicalStores.map((store, index) => {
                const positions = [
                  "top-[5%] right-0 z-20",
                  "bottom-0 left-[20%] md:left-[35%] z-30",
                  "top-[15%] md:top-0 left-0 z-10",
                ];
                return (
                  <div key={index} className={`absolute w-[140px] h-[140px] md:w-[260px] md:h-[260px] bg-blue-600 rounded-full shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] border-4 border-white flex flex-col items-center justify-center p-2 md:p-6 transition-transform duration-500 hover:scale-105 hover:z-50 cursor-pointer group ${positions[index]}`}>
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4 text-white backdrop-blur-sm shadow-inner transition-transform duration-500 group-hover:rotate-12">
                      {React.cloneElement(store.icon as React.ReactElement, { className: "w-5 h-5 md:w-8 md:h-8 text-white" })}
                    </div>
                    <span className="text-[10px] md:text-xl font-black text-white text-center leading-tight tracking-tight uppercase px-2 md:px-4">{store.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        </div> {/* End of max-w-7xl wrapper */}
      </main>
      <Footer />
    </div>
  );
}
