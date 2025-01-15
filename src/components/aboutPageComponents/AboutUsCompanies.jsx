import React from 'react'
import BrandLogos from '../contactPageComponents/BrandLogos'

function AboutUsCompanies() {
    return (
        <div className="bg-mainBackgroundWhite pb-16">
            <div className="flex flex-col items-center justify-between p-8 mx-auto w-[92%] relative">
                <div className="text-center md:text-start flex-1">
                    <h4 className="text-[40px] font-bold text-textColorDarkGray pt-4">
                        Big Companies Are Here
                    </h4>
                    <p className="mb-4 pt-4 text-[14px] text-textColorLightGray">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
            </div>
            <BrandLogos />
        </div>
    )
}

export default AboutUsCompanies
