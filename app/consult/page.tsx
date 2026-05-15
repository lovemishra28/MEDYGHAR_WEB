"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Stethoscope, 
  Baby, 
  HeartPulse, 
  Brain, 
  Smile, 
  Apple, 
  Bone, 
  MoreHorizontal,
  Star,
  Bed,
  UserRound,
  Search as SearchIcon
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function ConsultPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("General Physician");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false);
  const router = useRouter();

  const categories = [
    { name: 'General Physician', icon: <Stethoscope className="w-6 h-6 text-blue-600" /> },
    { name: 'Pediatrician', icon: <Baby className="w-6 h-6 text-blue-600" /> },
    { name: 'Gynecologist', icon: <span className="text-blue-600 font-bold text-2xl">♀</span> },
    { name: 'Cardiologist', icon: <HeartPulse className="w-6 h-6 text-blue-600" /> },
    { name: 'Neurologist', icon: <Brain className="w-6 h-6 text-blue-600" /> },
    { name: 'Dentist', icon: <Smile className="w-6 h-6 text-blue-600" /> },
    { name: 'Urologist', icon: <Bed className="w-6 h-6 text-blue-600" /> },
    { name: 'Psychiatrist', icon: <UserRound className="w-6 h-6 text-blue-600" /> },
    { name: 'Dietitian', icon: <Apple className="w-6 h-6 text-blue-600" /> },
    { name: 'Orthopedic', icon: <Bone className="w-6 h-6 text-blue-600" /> },
    { name: 'More', icon: <MoreHorizontal className="w-6 h-6 text-blue-600" /> },
  ];

  useEffect(() => {
    async function fetchDoctors() {
      setLoading(true);
      try {
        const response = await fetch(`/api/doctors?category=${selectedCategory}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setDoctors(data);
        } else {
          setDoctors([]);
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    }
    fetchDoctors();
  }, [selectedCategory]);

  const handleBooking = async (doctor: any) => {
    setIsBooking(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login?message=login_required');
        setIsBooking(false);
        return;
      }

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}` 
        },
        body: JSON.stringify({
          doctorName: doctor.name,
          fee: doctor.consultation_fee
        }),
      });

      if (res.ok) {
        alert(`Success! Your appointment with ${doctor.name} is confirmed.`);
        router.push('/orders'); 
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsBooking(false);
    }
  };

  const filteredDoctors = doctors.filter((doc: any) => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pb-10">
      {/* Header Section (Simple Blue with Search) */}
      <div className="bg-blue-600 pt-16 pb-8 px-6 shadow-md">
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search..."
            className="w-full bg-white border-none rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 placeholder:text-gray-400 font-medium shadow-sm outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Specialty Categories Grid */}
      <div className="px-4 py-8">
        <div className="grid grid-cols-4 gap-5 mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 border ${
                selectedCategory === cat.name 
                ? 'bg-white border-blue-100 shadow-md scale-[1.02]' 
                : 'bg-white border-gray-100 shadow-sm hover:border-blue-200'
              }`}
            >
              <div className={`mb-2 transition-transform`}>
                {cat.icon}
              </div>
              <span className={`text-[9px] sm:text-[10px] text-center leading-tight font-bold ${
                selectedCategory === cat.name ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Label */}
      <div className="text-center mb-10">
        <h3 className="text-sm font-bold text-gray-800">
          Result's for "{searchQuery || ""}"
        </h3>
      </div>

      {/* Doctor List / Empty State */}
      <div className="px-4 max-w-4xl mx-auto">
        {loading ? (
          // Skeleton Loading
          [1, 2].map((n) => (
            <div key={n} className="bg-white rounded-3xl p-5 border border-gray-100 animate-pulse mb-4">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full"></div>
                <div className="flex-1 py-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))
        ) : filteredDoctors.length > 0 ? (
          <div className="space-y-4">
            {filteredDoctors.map((doc: any) => (
              <div key={doc.id} className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex gap-5 items-start">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-xl font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {doc.initials || doc.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg leading-tight">{doc.name}</h4>
                        <p className="text-blue-600 text-sm font-bold mt-0.5">{doc.specialty}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-[10px] font-black text-yellow-700">{doc.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-4 text-[11px] font-bold text-gray-400">
                      <span>💼 {doc.experience} Exp</span>
                      <span className="text-blue-600">💰 {doc.consultation_fee}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-gray-50 flex gap-3">
                  <button 
                    onClick={() => handleBooking(doc)}
                    disabled={isBooking}
                    className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isBooking ? 'Processing...' : 'Book Visit'}
                  </button>
                  <button className="px-5 bg-gray-50 text-gray-400 rounded-xl font-bold text-xs hover:bg-gray-100 transition-colors">
                    Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State matching the screenshot */
          <div className="text-center py-20 flex flex-col items-center">
            <div className="relative mb-6">
              <SearchIcon className="w-20 h-20 text-gray-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-white/50 rounded-full blur-sm"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No data found</h3>
            <p className="text-gray-500 text-sm max-w-[250px] mx-auto">
              We couldn't find any results. for "{searchQuery || ""}" Try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
