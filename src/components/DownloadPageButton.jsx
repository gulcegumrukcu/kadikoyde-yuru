import React from 'react';
import html2canvas from 'html2canvas';

const DownloadPageButton = () => {
    const handleDownload = () => {
        const page = document.getElementById('root');

        html2canvas(page).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'certificate.png';
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    return (
        <button
            className="bg-black text-white px-4 py-4 text-xl rounded-md mr-4"
            onClick={handleDownload}
        >
            Sertifikanı İndir
        </button>
    );
};

export default DownloadPageButton;
