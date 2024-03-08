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
      document.getElementById('upload').innerHTML = 'Loading...';
  
      await axios.post(props.url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('File uploaded successfully');
      // You can add additional logic here, such as displaying a success message to the user.
    } catch (error) {
      console.error('Error uploading file:', error);
      // You can add additional logic here, such as displaying an error message to the user.
    }
  
    // Reset the button text to 'Upload' after the upload completes (success or failure)
    document.getElementById('upload').innerHTML = 'Upload';
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="file-upload-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <label htmlFor="file-input">Choose File</label>
      <input id="file-input" type="file" onChange={handleFileChange} />
      {file && <p className="file-name">{file.name}</p>}
      <p>or</p>
      <p>Drag and drop your file here</p>
      <button id='upload' onClick={handleUpload} style={{'background':'gray'}}>Upload</button>
    </div>
  );
};

export default FileUpload;
