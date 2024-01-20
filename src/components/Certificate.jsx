import React from 'react';
import DownloadPageButton from './DownloadPageButton';
import certificateImage from '/images/sertifika.png'; // Adjust the path accordingly

const Certificate = ({ userName, merdivenYolu }) => {
    console.log('MerdivenYolu:', merdivenYolu); // Add this line to log the value
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={certificateImage}
                    alt="Certificate Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 text-black text-center">
                <h2 className="font-cursive text-5xl font-bold mb-6 underline inline-block">
                    {merdivenYolu ? 'Merdiven Buldun!' : 'Kadıköy\'de Yürüdün!'}
                </h2>
                <p className="text-lg mb-6">Sevinç içinde belirtmek isteriz ki,</p>
                <h3 className="font-cursive text-4xl font-bold mb-6 underline inline-block">
                    {userName}
                </h3>
                <p className="text-lg mb-6">
                    {merdivenYolu ? 'Başarıyla 7 metrelik merdivenini buldun.' : 'Başarıyla Kadıköy\'de yürüdü.'}
                </p>

                {/* Additional Buttons */}
                <button
                    className="bg-red-800 text-white px-4 py-4 text-xl rounded-md mr-4 cursor-pointer"
                    onClick={() => window.location.reload()}
                >
                    Yeniden Oyna
                </button>
                <DownloadPageButton />
            </div>
        </div>
    );
};

export default Certificate;
