import React, { useState, useEffect } from 'react';
import DownloadPageButton from './DownloadPageButton';
import logo from '/images/logo.png';
import sertifika from '/images/sertifika.png';
import sertifikaVertical from '/images/sertifika-vertical.png';
import sus from '/images/sus.png';
import html2canvas from 'html2canvas'; // Import html2canvas library

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

    const handleShare = async () => {
        try {
            const certificateElement = document.getElementById('certificate-container');
            const canvas = await html2canvas(certificateElement, { scale: 2 });

            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            const file = new File([blob], 'certificate.png', { type: 'image/png' });

            if (navigator.share) {
                await navigator.share({
                    files: [file],
                    title: 'Certificate',
                    text: 'Check out my certificate!',
                });
            } else {
                throw new Error('Web Share API not supported');
            }
        } catch (error) {
            console.error('Error sharing:', error);
            // Handle error 
            alert('Tarayıcınız hasetlik yaparak bu dosyayı paylaşmayı desteklenmiyor. Sertifikayı manuel indirip paylaşabilirsiniz.');
        }
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
                    <div className="w-[60%] mx-auto mb-8 flex md:w-[25%]">
                        <img src={logo} alt="logo" />
                    </div>
                    <h2 className="font-cursive text-xl md:text-2xl lg:text-4xl font-bold underline inline-block">
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
                    <h5 className="mt-2 text-md lg:text-lg inline-block mr-2">
                        by
                    </h5>
                    <h4 className="mt-2 font-cursive text-lg lg:text-xl font-bold underline inline-block">
                        @gulchx
                    </h4>
                    <h5 className="mt-2 text-md lg:text-lg inline-block ml-2">
                        &lt;3
                    </h5>
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
                        <DownloadPageButton onDownloadComplete={handleDownloadComplete} handleShare={handleShare} />
                    </div>
                    <button className="-mt-2 md:-mt-4 text-[#d8d8d8] border bg-black text-md md:text-lg lg:text-xl border-[#f5fdc3]  hover:border-black hover:text-[#420400] font-kanit font-medium p-[8px] md:p-[10px] lg:p-[12px] hover:bg-[#f5fdc3]" onClick={handleShare}>
                        PAYLAŞ
                    </button>
                </div>
            )}
        </div>
    );
};

export default Certificate;
