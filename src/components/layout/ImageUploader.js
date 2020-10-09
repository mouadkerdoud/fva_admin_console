import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
 
function ImageUploader() {
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
  };
 
  const [images, setImages] = useState({});

  
  return (
        <div  >
        <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true, minWidth: 300 }}
            theme="light"
        />
    </div>
  );
}
 
export default ImageUploader;