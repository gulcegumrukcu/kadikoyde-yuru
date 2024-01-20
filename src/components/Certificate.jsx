import React, { useState } from 'react';
import DownloadPageButton from './DownloadPageButton';
import certificateImage from '/images/sertifika.png'; // Adjust the path accordingly
import logo from '/images/logo.png';
import sus from '/images/sus.png';

const Certificate = ({ userName, merdivenYolu }) => {
    const [isDownloaded, setDownloaded] = useState(false);

    const handleDownloadComplete = () => {
        setDownloaded(true);
    };

    return (
        <>
            <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={certificateImage}
                        alt="Certificate Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10  text-black text-center">
                    <div className='w-[35%] mx-auto mb-8 flex '>
                        <img src={logo} alt="logo" />
                    </div>
                    <h2 className="font-cursive text-6xl font-bold  underline inline-block">
                        {merdivenYolu ? 'Merdiven Buldun!' : 'Kadıköy\'de Yürüdün!'}
                    </h2>

                    <img className='w-[15%] mx-auto ' src={sus} alt="sus" />

                    <p className="text-xl font-kanit -my-4 mb-4">Sevinç içinde belirtmek isteriz ki,</p>
                    <h3 className="my-4 mb-6 font-cursive text-6xl font-bold  underline inline-block">
                        {userName}
                    </h3>
                    <p className="text-xl mt-4 font-kanit ">
                        {merdivenYolu
                            ? 'Başarıyla 7 metrelik merdivenini bularak oyunu bitirdi!'
                            : 'Bu sefer de böyle Kadıköy\'de yürüdü.'}
                    </p>

                    {!isDownloaded && (
                        <div id="buttons-container" className='fixed bottom-0 mb-4 left-0 flex flex-row justify-evenly w-full gap-[75%]'>
                            <button
                                className="-mt-4 text-[#d8d8d8] border bg-black  text-md  border-[#f5fdc3] hover:bg-opacity-10 hover:border-black hover:text-[#420400]  font-kanit font-medium p-[10px]"
                                onClick={() => window.location.reload()}
                            >
                                YENİDEN OYNA
                            </button>
                            <div className="-mt-4  text-[#d8d8d8] border bg-black text-md border-[#f5fdc3] hover:bg-opacity-10 hover:border-black hover:text-[#420400]  font-kanit font-medium p-[10px]">
                                <DownloadPageButton onDownloadComplete={handleDownloadComplete} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Certificate;
