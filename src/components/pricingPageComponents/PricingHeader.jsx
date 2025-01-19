import React from 'react'
import Breadcrumb from '../generalComponents/Breadcrumb'

function PricingHeader() {
    return (
        <div className="flex flex-col text-center items-center justify-between m-8 pt-10 mx-auto  bg-white relative">
            <div className="flex-1  ">
                <h4 className=" w-[92%] mx-auto font-bold mb-4 text-textColorLightGray  p-8 ">PRICING</h4>
                <h2 className="text-4xl font-bold inline-block">Simple</h2>
                <h2 className="text-4xl font-bold inline-block ml-4">Pricing</h2>

            </div>
            <div className="relative flex-1">
                <Breadcrumb fromTeamHeaderComponents={true} backgroundColor={'bg-white'} showOnMobile={false} />

            </div>
        </div>
    )
}

export default PricingHeader