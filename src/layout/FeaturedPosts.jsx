import React from 'react';
import FeaturedPostCard from '../components/FeaturedPostCard';

// Featured Posts verilerini daha modüler hale getirdim
const featuredPostData = [
    {
        image: "img/FeaturedPosts/featured1.jpeg",
        company: "Google",
        trending: "Trending",
        new: "New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10
    },
    {
        image: "img/FeaturedPosts/feature2.jpeg",
        company: "Google",
        trending: "Trending",
        new: "New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "30 May 2021",
        comments: 5
    },
    {
        image: "img/FeaturedPosts/featured3.jpeg",
        company: "Google",
        trending: "Trending",
        new: "New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "15 June 2021",
        comments: 15
    },
];

const FeaturedPosts = () => {
    return (
        <div className="pt-8 pb-8 w-full max-w-7xl mx-auto">
            {/* Başlık ve açıklama */}
            <p className="text-lg sm:text-2xl text-navbarLigthBlue text-center mb-2">Practice Advice</p>
            <h1 className="text-xl sm:text-4xl text-textColorDarkGray font-bold text-center mb-4">Featured Posts</h1>
            <p className="text-sm sm:text-base text-center text-textColorLightGray mb-8">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            
            {/* Featured Post Card'ları */}
            <div className="flex flex-wrap justify-center gap-20">
                {featuredPostData.map((featuredData, index) => (
                    <FeaturedPostCard key={index} featuredData={featuredData} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedPosts;
