import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('tags', tags);

    axios.post('/api/images/upload', formData)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={submitForm}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" placeholder="Tags" onChange={(e) => setTags(e.target.value)} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUpload;