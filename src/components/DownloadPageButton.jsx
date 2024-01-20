// DownloadPageButton.jsx
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const DownloadPageButton = () => {
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        const buttonsContainer = document.getElementById('buttons-container');
        buttonsContainer.style.visibility = 'hidden';

        const page = document.getElementById('root');

        html2canvas(page).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'certificate.png';
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset visibility after the download is complete
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
