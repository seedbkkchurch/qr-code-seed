import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const QRCodeGenerator = () => {
  const [link, setLink] = useState('https://www.seedchurchbkk.org/') // Default link

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setLink(e.target.value)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={link}
        onChange={handleInputChange}
        placeholder="Enter link here"
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <div>
        {/* <QRCodeSVG value={link} size={256} /> */}
        <QRCodeCanvas
          value={link}
          title={'Title for my QR Code'}
          size={456}
          bgColor={'#ffffff'}
          fgColor={'#000000'}
          level={'L'}
          minVersion={10}
          marginSize={0}
          imageSettings={{
            src: 'https://www.seedchurchbkk.org/SEED_CHURCH_LOGO_3.png',
            height: 140,
            width: 140,
            opacity: 1,
            excavate: true,
          }}
        />
      </div>
      <p>Scan this QR code or click the link below:</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </div>
  )
}

export default QRCodeGenerator
