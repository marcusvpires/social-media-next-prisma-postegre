import React, { useState } from 'react';
import Layout from '../component/Layout';
import compressImage from '../middleware/compressImage';

const uploadImage = async ({ scr, height, width }) => {
  try {
    const body = { scr, height, width };
    const res = await fetch('/api/image/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    console.log("Response:", res)
  } catch (error) {
    console.error(error);
  }
};

const UploadImagePage = () => {
  const [file, setFile] = useState({ name: '' });

  const handleFile = (ev) => {
    const image = ev.target.files[0];
    setFile(image);
  };

  const handleSubmit = async () => {
    try {
      const callback = (image) => {
        console.log("Compress:", image)
        uploadImage(image)
      }
      compressImage(file, callback)
    } catch (err) {
      console.error("Error on upload image: " + err.name, err.message)
    }
  }

  return (
    <Layout>
      <input type='file' onChange={handleFile} />
      <button onClick={handleSubmit} >Enviar</button>
    </Layout>
  );
};

export default UploadImagePage;
