import React from 'react';

const Menu = ({ isPopupOpen, setIsPopupOpen }) => {
    const handlePopupToggle = () => {
        setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
    };

    const handleRestart = () => {
        setIsPopupOpen(false);
        window.location.reload(); // Refresh the page
    };

    return (
        <>
            <img src="/images/menu.svg" onClick={handlePopupToggle} alt="Open Menu" className="w-8 h-8 mt-1 cursor-pointer" />

            {isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center">
                    <div className="bg-black bg-opacity-90 z-50 p-8 rounded-md text-white w-auto mx-auto relative">
                        <button
                            className="absolute top-2 right-2 text-white cursor-pointer"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            <img src="/images/close.svg" alt="Close Menu" className="w-8 h-8" />
                        </button>

                        <div className="mx-auto justify-center grid gap-12 text-xl font-bold mt-8">
                            <button className="block border border-[#f5fdc3] text-white p-8" onClick={handleRestart}>
                                YENİDEN BAŞLA
                            </button>

                            <button className="block border border-[#f5fdc3] text-white p-8">
                                CREDİTS
                            </button>
                            <button className="block border border-[#f5fdc3] text-white p-8">
                                <a href="mailto:gumrukcugulce@gmail.com" >
                                    MAİL
                                </a>
                            </button>


                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
