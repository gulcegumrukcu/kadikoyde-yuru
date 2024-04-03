// DownloadPageButton.jsx
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const DownloadPageButton = () => {
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        const buttonsContainer = document.getElementById('buttons-container');
        buttonsContainer.style.visibility = 'hidden';

        const certificateElement = document.getElementById('certificate-container'); // Make sure this is the ID of your certificate element

        html2canvas(certificateElement, {
            scale: window.devicePixelRatio, // This will help in retaining the quality on high-DPI devices
            useCORS: true, // This is to handle external images if any on the canvas, might not be necessary in your case
        }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'certificate.png';
            link.href = canvas.toDataURL('image/png');
            link.click();

            // Clean up
            link.remove();
            buttonsContainer.style.visibility = 'visible';
        });
    };


    return (
        <button onClick={handleDownload} className={loading ? 'hidden' : 'block'}>
            SERTİFİKANI İNDİR
        </button>
    );
};

export default DownloadPageButton;
