
import React from 'react';
import MeetOurTeamCard from '../generalComponents/MeetOurTeamCard';

const teamMembers = [
    {
        username: "Oğuzhan Evin",
        profession: "Full Stack Developer",
        imageUrl: "img/teamPage/ben.png.jpeg",
    },
    {
        username: "Erhan FIRAT",
        profession: "Project Owner",
        imageUrl: "img/teamPage/ErhanFirat.jpeg",
    },
    {
        username: "Gökhan OZDEMIR",
        profession: "Scrum Master",
        imageUrl: "img/teamPage/gokhanOzdemir.jpeg",
    },
];

function AboutUsMeetOurTeam() {
    return (
        <div className="w-[92%] mx-auto py-16">
            <div className="text-center">
                <h1 className="text-textColorDarkGray text-4xl font-bold mb-4">Meet Our Team</h1>
                <p className="text-textColorLightGray text-md mb-16 max-w-3xl mx-auto">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-full md:w-1/3 lg:w-1/4">
                        <MeetOurTeamCard member={member} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsMeetOurTeam;
