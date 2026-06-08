"use client";

import { useState } from "react";

const colleges = [
  {
    name: "IIT Hyderabad",
    location: "Hyderabad",
    fees: "₹2,00,000",
    rating: "4.8 ⭐",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "NIT Warangal",
    location: "Warangal",
    fees: "₹1,50,000",
    rating: "4.6 ⭐",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "IIIT Bangalore",
    location: "Bangalore",
    fees: "₹3,00,000",
    rating: "4.7 ⭐",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {

  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-5 flex justify-between">

        <h1 className="text-2xl font-bold">
          College Finder
        </h1>

        <div className="space-x-6">
          <button>Home</button>
          <button>Colleges</button>
          <button>Compare</button>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-5">

        <h1 className="text-4xl md:text-6xl font-bold text-blue-600">
          Discover Your Dream College
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          Search, compare and explore top colleges in India 🚀
        </p>

        {/* Search Bar */}
        <div className="mt-10">

          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[350px] p-4 rounded-xl border border-gray-300 outline-none text-gray-800 bg-white"
          />

        </div>

      </section>

      {/* College Cards */}
      <section className="px-10 pb-20">

        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Top Colleges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredColleges.map((college, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              <img
                src={college.image}
                alt={college.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold text-gray-800">
                  {college.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  📍 {college.location}
                </p>

                <div className="flex justify-between mt-4">

                  <span className="font-semibold text-gray-700">
                    {college.fees}
                  </span>

                  <span className="text-yellow-500 font-bold">
                    {college.rating}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}