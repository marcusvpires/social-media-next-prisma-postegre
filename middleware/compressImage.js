const compressImage = (file, callback = () => {}, maxWidth = 1000, maxHeight = 500) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.onload = function (event) {
    const blob = new Blob([event.target.result]);
    window.URL = window.URL || window.webkitURL;
    const blobURL = window.URL.createObjectURL(blob);

    const image = new Image();
    image.src = blobURL;
    image.onload = () => {
      const resized = resizeMe(image, maxWidth, maxHeight);
      callback(resized);
    };
  };
};

function resizeMe(img, maxWidth, maxHeight) {
  const canvas = document.createElement('canvas');
  let width = img.width;
  let height = img.height;

  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height *= maxWidth / width));
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width *= maxHeight / height));
      height = maxHeight;
    }
  }

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);
  const scr = canvas.toDataURL('image/jpeg', 0.8);
  canvas.remove();
  return {
    scr,
    height,
    width,
  };
}

export default compressImage;
