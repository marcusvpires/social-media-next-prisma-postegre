
type Options = {
  sameSize?: boolean;
  maxWidth?: number;
  maxHeight?: number;
  quality?: number
}

const compressImage = (file: File, callback: Function, options?: Options) => {
  console.log("Compress Image (", file.size / 1000, "MB ) -", file)
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.onload = function (event) {
    const blob = new Blob([event.target.result]);
    window.URL = window.URL || window.webkitURL;
    const blobURL = window.URL.createObjectURL(blob);

    const image = new Image();
    image.src = blobURL;
    image.onload = () => {
      const resized = resizeMe(image, options);
      callback(resized);
    };
  };
};

function resizeMe(img: HTMLImageElement, options?: Options) {
  const canvas = document.createElement('canvas');
  let width = img.width;
  let height = img.height;
  if (width > height) {
    if (options.maxWidth || width > options.maxWidth) {
      height = Math.round((height *= options.maxWidth / width));
      width = options.maxWidth;
    }
  } else {
    if (options.maxHeight || height > options.maxHeight) {
      width = Math.round((width *= options.maxHeight / height));
      height = options.maxHeight;
    }
  }
  if (options.sameSize) {
    if (width > height) {
      width = height;
    } else {
      height = width;
    }
  }
  if (!options.quality) options.quality = 1
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);
  const src = canvas.toDataURL('image/jpeg', options.quality);
  canvas.remove();
  return { src, height, width };
}

export default compressImage;
