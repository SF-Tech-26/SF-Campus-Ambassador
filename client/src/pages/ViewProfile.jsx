import React from 'react'
import background from "../assets/Profile-img.JPG"
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
        <div className="relative min-h-screen text-white bg-cover bg-center bg-no-repeat overflow-hidden"
          style={
        { backgroundImage: `url(${background})` }}>          

            {/* Main Container */}
            <div className="relative z-10 px-6 py-10 md:px-16 lg:px-24">
                {/* Heading */}
                <div className="flex justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 via-yellow-600 to-blue-400 text-transparent bg-clip-text">
                    Your Profile
                </h1>
                </div>
                {/* Profile Card */}
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Left Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-l font-semibold text-white-300">SF ID:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.sfid}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">Name:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.name}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">State:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.state}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">City:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.city}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">College:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.college}</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-l font-semibold text-white-300">Mobile:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.mobile}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">Email:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.email}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">Gender:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.gender}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">Alternate Email:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.altEmail}</p>
                            </div>

                            <div>
                                <label className="block text-l font-semibold text-white-300">Date of Birth:</label>
                                <p className="bg-white/6 rounded-lg px-4 py-3">{user.dob}</p>
                            </div>
                        </div>
                    </div>

                    {/* Year of Pass */}
                    <div className="mt-5 text-center">
                        <label className="block text-l font-semibold text-white-300 mb-1">Year of Passing:</label>
                        <p className="bg-white/6 rounded-lg inline-block px-8 py-3 text-lg font-semibold tracking-wide">
                            {user.yearOfPass}
                        </p>
                    </div>
                
            </div>
        </div>
    );

}

export default ViewProfile