"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function ConsultPage() {
  const [doctors, setDoctors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Specialists");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const router = useRouter();

  const categories = [
    "All Specialists", "Pediatrics", "Cardiologist", 
    "Dermatologist", "General Physician", "Gynecologist", "Dentist"
  ];

  useEffect(() => {
    async function fetchDoctors() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/doctors?category=${selectedCategory}`);
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setDoctors(data);
        } else if (data.error) {
          setError(data.error);
          setDoctors([]);
        } else {
          setDoctors([]);
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError("Failed to connect to the server.");
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
        alert('You must be logged in to book a visit.');
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

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Something went wrong processing your booking.');
        return;
      }

      alert(`Success! Your appointment with ${doctor.name} is confirmed.`);
      router.push('/orders'); 
      
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 space-y-6">
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-heading mb-4 text-lg">Categories</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat 
                  ? 'bg-brand-primary text-white shadow-md' 
                  : 'hover:bg-brand-light hover:text-brand-primary text-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Doctor List */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-heading">
            {selectedCategory} Specialists
          </h2>
        </div>

        {loading ? (
          <div className="text-center py-20 text-brand-primary font-bold">Loading specialists...</div>
        ) : error ? (
          <div className="bg-red-50 border border-red-100 p-8 rounded-3xl text-center">
            <p className="text-red-600 font-bold mb-2">Oops! Something went wrong.</p>
            <p className="text-red-400 text-sm mb-4">{error}</p>
            <button 
              onClick={() => setSelectedCategory(selectedCategory)}
              className="text-red-600 underline font-bold"
            >
              Try Again
            </button>
          </div>
        ) : doctors.length === 0 ? (
          <div className="text-center py-20 text-gray-400 font-medium">
            No specialists found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {doctors.map((doc: any) => (
              <div key={doc.id} className="bg-white border border-gray-100 rounded-3xl p-6 flex gap-6 hover:shadow-xl transition-all group">
                <div className="w-24 h-24 bg-brand-light rounded-2xl flex items-center justify-center text-2xl font-bold text-brand-primary">
                  {doc.initials}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-heading group-hover:text-brand-primary transition-colors">{doc.name}</h4>
                      <p className="text-brand-primary text-sm font-semibold">{doc.specialty}</p>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-lg">
                      ★ {doc.rating}
                    </span>
                  </div>
                  
                  <div className="mt-4 flex gap-4 text-xs text-gray-500 font-medium">
                    <span>💼 {doc.experience}</span>
                    <span>💰 {doc.consultation_fee}</span>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button 
                      onClick={() => handleBooking(doc)}
                      disabled={isBooking}
                      className="flex-1 bg-brand-primary text-white py-2 rounded-xl font-bold text-sm hover:bg-brand-dark transition-colors shadow-md disabled:opacity-50"
                    >
                      {isBooking ? 'Processing...' : 'Book Visit'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
