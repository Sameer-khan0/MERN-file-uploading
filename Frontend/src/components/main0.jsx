import React, { useState } from 'react';
import './maincom.css';  // Import the CSS file
import axios from 'axios';

const FileUpload = (props) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('Please select a file');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      // Set the button text to 'Loading...' during the upload
      document.getElementById('upload0').innerHTML = 'Loading...';
  
      await axios.post(props.url, formData, {
        headers: {
          // 'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  
    document.getElementById('upload0').innerHTML = 'Upload';
  };

  return (
    <div className="file-upload-container">
      <label htmlFor="file-input0">Choose File</label>
      <input id="file-input0" type="file" onChange={handleFileChange} />
      {file && <p className="file-name">{file.name}</p>}
      <button id='upload0' onClick={handleUpload} style={{ 'background': 'gray' }}>Upload</button>
    </div>
  );
};

export default FileUpload;
