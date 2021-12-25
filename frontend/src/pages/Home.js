import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div>
      <h1 className="title">Galeria Cloudinary</h1>
      <div className="gallery">
        {imageIds &&
          imageIds.map((imageId, index) => (
            <Image key={index} cloudName="febb-cloud-imagenes" publicId={imageId} width="300" crop="scale" />
          ))}
      </div>
    </div>
  );
}
