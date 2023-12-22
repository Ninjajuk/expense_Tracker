// src/components/Team.js
import React from "react";
import Layout3 from "../Components/Layout/Layout3";


const teamData = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
  },
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    image:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
  }
  // Add more team members here
];

const Team = () => {
  return (
    <Layout3>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-center mb-6">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamData.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">
                {member.name}
              </h2>
              <p className="text-gray-600 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout3>
  );
};

export default Team;
