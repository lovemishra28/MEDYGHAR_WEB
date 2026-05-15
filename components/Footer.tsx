"use client";
import React from 'react';
import Link from 'next/link';
import { Globe, X, Camera, Users, Mail, Phone, MapPin, HeartPulse, ExternalLink, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Our Services',
      links: [
        { name: 'Online Consultation', href: '/consult' },
        { name: 'Order Medicines', href: '/orders' },
        { name: 'Lab Tests', href: '#' },
        { name: 'Health Packages', href: '#' },
        { name: 'Clinic Appointments', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Doctors', href: '/consult' },
        { name: 'Medical Stores', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Refund Policy', href: '#' },
        { name: 'FAQs', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#050B18] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300">
                <HeartPulse className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">
                Medi<span className="text-blue-500">Ghar</span>
              </span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Bringing premium healthcare to your doorstep. Verified doctors, authentic medicines, and accurate lab reports at your fingertips.
            </p>
            <div className="flex gap-4">
              {[Globe, X, Camera, Users].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
              {/* Patterns */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 border-8 border-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Download MediGhar App</h3>
                  <p className="text-blue-100/80">Get the best healthcare experience on your phone.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl border border-white/10 hover:bg-gray-900 transition-all">
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-[10px] opacity-60 leading-none">Get it on</div>
                      <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl border border-white/10 hover:bg-gray-900 transition-all">
                    <ExternalLink className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-[10px] opacity-60 leading-none">Download on the</div>
                      <div className="text-sm font-bold leading-none mt-1">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold text-lg mb-8">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-bold text-lg mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  123 Healthcare Plaza, Sector 44, <br />Gurugram, Haryana - 122003
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-gray-400 text-sm">+91 1800-123-4567</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-gray-400 text-sm">support@medighar.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-gray-300 font-bold">MediGhar Healthcare Pvt. Ltd.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Use</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
