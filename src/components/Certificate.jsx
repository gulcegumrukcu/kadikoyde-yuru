import React, { useState, useEffect } from 'react';
import DownloadPageButton from './DownloadPageButton';
import logo from '/images/logo.png';
import sertifika from '/images/sertifika.png';
import sertifikaVertical from '/images/sertifika-vertical.png';
import sus from '/images/sus.png';

const Certificate = ({ userName, merdivenYolu }) => {
    const [isDownloaded, setDownloaded] = useState(false);
    const [isVertical, setIsVertical] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerWidth < window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDownloadComplete = () => {
        setDownloaded(true);
    };

    return (
        <div id="certificate-wrapper" style={{ overflow: 'hidden' }}>
            <div id="certificate-container" className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={isVertical ? sertifikaVertical : sertifika} // Adjust the path accordingly
                        alt="Certificate Background"
                        className="w-full h-full object-center md:object-cover"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>

                <div className="relative z-10 text-black text-center">
                    <div className="w-[80%] mx-auto mb-8 flex md:w-[35%]">
                        <img src={logo} alt="logo" />
                    </div>
                    <h2 className="font-cursive text-2xl md:text-4xl lg:text-5xl font-bold underline inline-block">
                        {merdivenYolu ? 'Merdiven Buldun!' : 'Kadıköy\'de Yürüdün!'}
                    </h2>

                    <img className="w-[15%] mx-auto" src={sus} alt="sertifika" />

                    <p className="text-md md:text-md lg:text-xl font-kanit md:my-2 lg:mb-2">Sevinç içinde belirtmek isteriz ki,</p>
                    <h3 className="md:my-4 my-12 lg:mb-6 font-cursive text-4xl lg:text-5xl font-bold underline inline-block">
                        {userName}
                    </h3>
                    <p className="text-md md:text-md lg:text-xl font-kanit md:my-2 lg:mb-2">
                        {merdivenYolu
                            ? 'Başarıyla 7 metrelik merdivenini bularak oyunu bitirdi!'
                            : 'Bu sefer de böyle Kadıköy\'de yürüdü.'}
                    </p>
                </div>
            </div>

            {!isDownloaded && (
                <div id="buttons-container" className="fixed bottom-0 pb-4 left-0 flex flex-row justify-evenly bg-black items-center w-full gap-[5%]">
                    <button
                        className="-mt-2 md:-mt-4 text-[#d8d8d8] border bg-black text-md md:text-lg lg:text-xl border-[#f5fdc3]  hover:border-black hover:text-[#420400] font-kanit font-medium p-[8px] md:p-[10px] lg:p-[12px] hover:bg-[#f5fdc3]"
                        onClick={() => window.location.reload()}
                    >
                        YENİDEN OYNA
                    </button>
                    <div className="-mt-2 md:-mt-4 text-[#d8d8d8] border bg-black text-md md:text-lg lg:text-xl border-[#f5fdc3]  hover:border-black hover:text-[#420400] font-kanit font-medium p-[8px] md:p-[10px] lg:p-[12px] hover:bg-[#f5fdc3]">
                        <DownloadPageButton onDownloadComplete={handleDownloadComplete} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificate;
