import cuid from 'cuid';

import carCompressor from 'utils/carCompressor';

export default function Upload() {
  return (
    <>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
        multiple
      />
    </>
  );
}

const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = Array.from(e.target.files);
  const car = await carCompressor(files);

  const res = await fetch(
    `/api/upload-url?keyName=${cuid()}&fileType=application/vnd.ipld.car`
  );
  const url = await res.json();
  console.info(url);
  const upload = await fetch(url, {
    method: 'PUT',
    body: car,
    headers: {
      'content-type': 'application/vnd.ipld.car',
      'x-amz-meta-import': 'car',
    },
  });

  if (upload.ok) {
    console.info('Uploaded successfully!');
  } else {
    console.error('Upload failed.');
  }
};
