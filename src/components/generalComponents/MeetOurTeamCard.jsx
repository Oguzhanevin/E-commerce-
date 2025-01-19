import React from 'react';

function MeetOurTeamCard({ member }) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center flex-col">
                {/* Profil Resmi */}
                <img
                    src={member.imageUrl}
                    alt={`${member.username} Profile`}
                    className="h-80 w-80 object-cover rounded-lg shadow-lg"
                />
                {/* Kullanıcı Bilgileri */}
                <p className="font-semibold pt-4 pb-2">{member.username}</p>
                <p className="text-textColorLightGray pb-2">{member.profession}</p>
                {/* Sosyal Medya İkonları */}
                <SocialIcons links={member.socialLinks} />
            </div>
        </div>
    );
}

// Sosyal Medya İkonları Bileşeni
const SocialIcons = ({ links }) => {
    const icons = {
        facebook: "fa-brands fa-square-facebook text-facebookIconBlue",
        instagram: "fa-brands fa-instagram text-instagramIconRed",
        twitter: "fa-brands fa-twitter text-twitterIconBlue",
    };

    return (
        <div className="flex pt-2 pb-4 text-2xl gap-3 items-center justify-center">
            {Object.entries(links).map(([platform, url]) => (
                <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${icons[platform]} md:text-buttonFullBlue cursor-pointer hover:scale-110 transition-transform`}
                ></a>
            ))}
        </div>
    );
};

export default MeetOurTeamCard;
