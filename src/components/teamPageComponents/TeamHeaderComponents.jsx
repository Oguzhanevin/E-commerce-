import React from 'react';
import Breadcrumb from '../generalComponents/Breadcrumb';

function TeamHeaderComponents() {
    return (
        <div className="flex flex-col items-center justify-center m-8 pt-10 mx-auto bg-white relative">
            <div className="w-[92%] mx-auto">
                <h4 className="font-bold mb-4 text-textColorLightGray p-8">WHAT WE DO</h4>
                <h2 className="text-4xl font-bold mb-4 p-8">Innovation tailored for you</h2>
            </div>
            <div className="relative w-[92%] mx-auto">
                <Breadcrumb fromTeamHeaderComponents={true} backgroundColor={'bg-white'} showOnMobile={false} />
            </div>
        </div>
    );
}

export default TeamHeaderComponents;
