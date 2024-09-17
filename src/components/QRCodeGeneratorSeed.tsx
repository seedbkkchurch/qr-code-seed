import React, { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export const QRCodeGeneratorSeed: React.FC = () => {
  const [link, setLink] = useState('https://www.seedchurchbkk.org/') // Default link
  const [description, setDescription] = useState('') // State for description
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const downloadQRCode = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current.querySelector('canvas')
      if (canvas) {
        const qrCodeUrl = canvas.toDataURL('image/png')
        const qrCodeImage = new Image()
        qrCodeImage.crossOrigin ="anonymous"
        qrCodeImage.src = qrCodeUrl
        qrCodeImage.onload = () => {
          const combinedCanvas = document.createElement('canvas')
          const context = combinedCanvas.getContext('2d')
          if (context) {
            combinedCanvas.width = canvas.width
            combinedCanvas.height = canvas.height + 50 // Adjust height for text
            context.drawImage(qrCodeImage, 0, 0)
            context.font = '20px Arial'
            context.fillStyle = 'red' // Set text color
            context.fillText(description, 10, canvas.height + 30) // Adjust position for text
            const combinedUrl = combinedCanvas.toDataURL('image/png')
            const link = document.createElement('a')
            link.href = combinedUrl
            link.download = 'QR_SEED_BKK.png'
            link.click()
          }
        }
      }
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator by คริสตจักรเมล็ดพันธ์ุ</h1>
      <input
        type="text"
        value={link}
        onChange={handleLinkChange}
        placeholder="Enter link here"
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter description here"
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
          color: 'red',
        }}
      />
      <div ref={canvasRef}>
        <QRCodeCanvas
          value={link}
          title={'Title for my QR Code'}
          size={456}
          bgColor={'#ffffff'}
          fgColor={'#000000'}
          level={'L'}
          minVersion={7}
          imageSettings={{
            src: 'https://seedbkkchurch.github.io/qr-code-seed/SEED_CHURCH_LOGO.png',
            x: undefined,
            y: undefined,
            height: 140,
            width: 140,
            opacity: 1,
            excavate: true,
          }}
        />
      </div>
      {description && <h1 style={{ color: 'red' }}>{description}</h1>}
      <button
        onClick={downloadQRCode}
        className='btn btn-primary'
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Download QR Code with Text
      </button>
    </div>
  )
}


