import imageCompression from 'browser-image-compression';

const updateProfileImage = async (file: File, email: string, callback: Function) => {
  const base64 = await compress(file)
  callback(base64)
};  

const compress = async (file: File) => {
  console.log(`Original file size: ${file.size / 1024 / 1024} MB`);
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  }
  try {
    const compressedFile = await imageCompression(file, options);
    console.log(`Compressed file size: ${compressedFile.size / 1024 / 1024} MB`);
    return imageCompression.getDataUrlFromFile(compressedFile)
  } catch (error) {
    console.log(error);
  }
}

export const uploadToServer = async (src: string, email: string) => {
  const body = { email, src }
  const result = await fetch(`/api/user/image`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return result
}


export default updateProfileImage;
