import React from "react";

const LocationSearchPanel = (props) => {
    const locations = [
        "689, Surya Nagar Gopalpura Bypass, Jaipur, Rajasthan",
        "689, Surya Nagar Gopalpura Bypass, Jaipur, Rajasthan",
        "689, Surya Nagar Gopalpura Bypass, Jaipur, Rajasthan",
        "689, Surya Nagar Gopalpura Bypass, Jaipur, Rajasthan",
        "689, Surya Nagar Gopalpura Bypass, Jaipur, Rajasthan",
    ]
    return (
        <div>
            {/* this is the location search panel */}
            {locations.map((location, index) => (
                <div key={index} onClick={()=> {
                    props.setVechiclePanel(true)
                    props.setPanelOpen(false)
                }} className="flex border-2 p-3 rounded-xl border-gray-100 active:border-black gap-4 my-4 justify-start items-center">
                <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium">{location}</h4>
            </div>
            ))}
        </div>
    )
}

export default LocationSearchPanel;