import React from 'react';

const Footer = () =>{
    return(
        <footer className="bg-gray-100 p-1 py-1.5 flex justify-between items-center rounded-b mt-1">
            {/* Footer Icons */}
            <div className="flex gap-0.5 flex-col">
                <div className="h-0.5 bg-gray-300 w-4 rounded-sm"></div>
                <div className="h-0.5 bg-gray-300 w-2 rounded-sm"></div>
            </div>
            <div className="flex gap-0.5">
                {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex gap-px flex-col">
                    <div className="h-px bg-gray-300 w-2 rounded-sm"></div>
                    <div className="h-px bg-gray-300 w-2.5 rounded-sm"></div>
                    <div className="h-px bg-gray-300 w-2 rounded-sm"></div>
                    <div className="h-px bg-gray-300 w-1.5 rounded-sm"></div>
                </div>
                ))}
            </div>
        </footer>
    )
}
export default Footer;