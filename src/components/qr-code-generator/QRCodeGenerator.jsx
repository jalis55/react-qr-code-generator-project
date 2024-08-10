import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import { v4 as uuidv4 } from 'uuid';

const QRCodeGenerator = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [qrValue, setQRValue] = useState('');
    const qrCodeRef = useRef(null);

    const generateUniqueId = () => {
        const uuid = uuidv4().replace(/-/g, ''); // Remove dashes from UUID
        return uuid.substring(0, 12); // Get first 12 characters
    };

    const handleQRCodeValue = () => {
        const newUid = generateUniqueId();
        const combinedValue = `Name: ${name}\nDesignation: ${designation}\nId: ${newUid}`;
        setQRValue(combinedValue);
        setName('');
        setDesignation('');
    };

    const saveQRCode = () => {
        const qrCodeElement = qrCodeRef.current;
        html2canvas(qrCodeElement).then((canvas) => {
            const link = document.createElement('a');
            const imageName = `qr-code-${name || 'default'}.png`; // Dynamically set the image name using a variable
            link.download = imageName;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                    placeholder='Enter name'
                />
                <input
                    onChange={(e) => setDesignation(e.target.value)}
                    type="text"
                    value={designation}
                    placeholder='Enter Designation'
                />
                <button
                    disabled={name.trim() === '' || designation.trim() === ''}
                    onClick={handleQRCodeValue}
                >
                    Generate
                </button>
            </div>
            <div>
                <br />
                {qrValue && (
                    <div ref={qrCodeRef}>
                        <QRCode id="qr-code-value" value={qrValue} size={200} />
                    </div>
                )}
                {qrValue && (
                    <button onClick={saveQRCode}>
                        Save QR Code
                    </button>
                )}
            </div>
        </div>
    );
}

export default QRCodeGenerator;
