import React from 'react'
import ParticleBackground from "../components/ParticleBackground";

const ViewProfile = () => {

    const user = {
        sfid: "SF000001",
        name: "test-1",
        state: "UP",
        city: "Kanpur",
        college: "IIT KGP",
        mobile: "1000011561",
        email: "test1@gmail.com",
        gender: "M",
        altEmail: "—",
        dob: "06-10-2024",
        yearOfPass: "2026",
    };

    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            <ParticleBackground />

            {/* Main Container */}
            <div className="relative z-10 px-6 py-10 md:px-16 lg:px-24">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                    Your Profile
                </h1>

                {/* Profile Card */}
                <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Left Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-300">SF ID</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.sfid}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">Name</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.name}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">State</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.state}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">City</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.city}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">College</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.college}</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-300">Mobile</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.mobile}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">Email</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.email}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">Gender</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.gender}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">Alternate Email</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.altEmail}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300">Date of Birth</label>
                                <p className="bg-white/10 rounded-lg px-4 py-2">{user.dob}</p>
                            </div>
                        </div>
                    </div>

                    {/* Year of Pass */}
                    <div className="mt-10 text-center">
                        <label className="block text-sm font-semibold text-gray-300 mb-1">Year of Passing</label>
                        <p className="bg-white/10 rounded-lg inline-block px-8 py-2 text-lg font-semibold tracking-wide">
                            {user.yearOfPass}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ViewProfile