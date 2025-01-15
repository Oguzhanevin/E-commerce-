import React from 'react';
import MeetOurTeamCard from '../generalComponents/MeetOurTeamCard';

// Team member data
const teamMembers = [
    { username: "Oğuzhan Evin", profession: "Full Stack Developer", imageUrl: "img/teamPage/ben.png.jpeg" },
    { username: "Erhan FIRAT", profession: "Project Owner", imageUrl: "img/teamPage/ErhanFirat.jpeg" },
    { username: "Gökhan OZDEMIR", profession: "Scrum Master", imageUrl: "img/teamPage/gokhanOzdemir.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m1.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m2.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m3.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m4.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m5.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m6.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m7.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m8.jpeg" },
    { username: "username", profession: "Profession", imageUrl: "img/teamPage/m9.jpeg" },
];

function MeetOutTeamList() {
    return (
        <div className="w-[92%] mx-auto py-16">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-textColorDarkGray text-[40px] mb-16">
                    Meet Our Team
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="w-full md:w-1/4">
                            <MeetOurTeamCard member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MeetOutTeamList;
