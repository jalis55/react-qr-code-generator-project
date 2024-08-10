
import { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [inputVal,setInputVal]=useState('');
    const [qrValue,setQRValue]=useState('');

    const handleQRCodeValue=()=>{
        console.log('object')
        setQRValue(inputVal);
        setInputVal('')
    }
  return (
    <div>
      <h1>QR code generator</h1>
      <div>
        <input 
        onChange={(e)=>setInputVal(e.target.value)}
        type="text" 
        name="qr-code-input" 
        value={inputVal}
        placeholder='Enter your value' />
        <button 
        disabled={inputVal && inputVal.trim() !=='' ?false :true}
        onClick={handleQRCodeValue}
        >Generate</button>
      </div>
      <div>
        <br />
        {qrValue 
            ?<QRCode id="qr-code-value" value={qrValue} size={300} />
            :null
        }
      </div>
    </div>
  )
}

export default QRCodeGenerator;
