import React, { useState } from 'react';
import Layout from '../component/Layout';
import compressImage from '../middleware/compressImage';

const UploadImagePage = () => {
  const [file, setFile] = useState({ name: '' });

  const handleFile = (ev) => {
    const image = ev.target.files[0];
    setFile(image);
  };

  const handleSubmit = async () => {
    try {
      const callback = (image) => {
        console.log(image)
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
