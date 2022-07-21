type Options = {
  maxSizeKB: number;
  maxDeviation?: number;
};

const main = (file: File, callback: Function, options?: Options) => {
  if (!options.maxDeviation) {
    options.maxDeviation = 50;
  }
  toBase64(file, compress, options);
};

const toBase64 = (file: File, callback: Function, options: Options) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.onload = async function (event) {
    const blob = new Blob([event.target.result]);
    window.URL = window.URL || window.webkitURL;
    const base64 = window.URL.createObjectURL(blob);
    callback(base64, file, options);
  };
};

const compress = async (base64: string, file: File, options: Options) => {
  // const type = file.type
  console.log("Compress")
  const size = file.size;
  let low = 0.0;
  let middle = 0.5;
  let high = 1.0;
  let result = '';

  while (Math.abs(size / 1000 - options.maxSizeKB) > (options.maxDeviation && 50)) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = document.createElement('img');

    const promise = new Promise((resolve, reject) => {
      img.onload = (ev) => resolve('Complete');
      img.onerror = reject;
    });
    img.src = base64;
    await promise;

    canvas.width = Math.round(img.width * middle);
    canvas.height = Math.round(img.height * middle);
    context.scale(canvas.width / img.width, canvas.height / img.height);
    context.drawImage(img, 0, 0);
    file = await urltoFile(canvas.toDataURL(), 'test.png', 'image/png');

    if (file.size / 1000 < options.maxSizeKB - options.maxDeviation) {
      low = middle;
    } else if (file.size / 1000 > options.maxSizeKB) {
      high = middle;
    }
    middle = (low + high) / 2;
    result = canvas.toDataURL();
    console.log("Result:", file)
  }
  return result;
};

const urltoFile = async (url: string, filename: string, mimeType: string) => {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
};

export default main;
