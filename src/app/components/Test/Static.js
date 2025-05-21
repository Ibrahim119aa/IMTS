"use client"
import React from 'react';
import Image from 'next/image';


const Tested = async () => {
    let apiUrl = process.env.API_URL;

    // let apiUrl='https://imts.ac.in/backend/get-Staff';
    // Simulate loading and fetch your data (replace this with your actual data fetching)
    const loading = false; // Change to false when you have real data
    const ex = await fetchData(); // Replace with actual data fetching

    return (
        <div className="slider-container overflow-hidden relative">
            (
            <div className="relative">
                <div className="slider">
                    {ex.map((consultant, index) => (
                        <div key={index} className="slider-item">
                            <div className="relative rounded-md overflow-hidden">
                                <Image
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                    src={`${apiUrl}images/${consultant.image}`}
                                    alt={consultant.name}
                                />
                                <div className="info-overlay">
                                    <div className="flex justify-between">
                                        <span className="rating">
                                            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" color="orange" className="me-1" height="1em" width="1em">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                            </svg>
                                            <p className="text-black font-medium">{consultant.rating == null ? '4.6' : consultant.rating}</p>
                                        </span>
                                    </div>
                                    <div className="bg-white p-2 rounded-md text-center">
                                        <h5 className="text-sm font-semibold">{consultant.name}</h5>
                                        <p className="text-xs text-[#0056d2]">{consultant.designation}</p>
                                        <p className="text-[#6c757d] text-sm">{consultant.experience}</p>
                                        <button className="bg-[#030A21] text-white px-2 py-1 rounded-md">Consult Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <button className="prev-button">&#10094;</button> {/* Left arrow */}
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <button className="next-button">&#10095;</button> {/* Right arrow */}
                </div>
            </div>
            )
        </div>
    );
};

const fetchData = async () => {
    const res = await fetch(`https://imts.ac.in/backend/get-Staff`, {
        next: {
            revalidate: 3600, // Cache the data for 3600 seconds (1 hour)
        },
    });
    return res.json();
};

export default Tested;
