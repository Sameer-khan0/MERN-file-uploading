import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Main from './components/main'
import Form from './components/Form'
import Main0 from './components/main0'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main url='http://localhost:4000/posts/upload' />
    <Main0 url='https://mern-file-uploading.vercel.app/posts/upload/img' />
    <Form url='http://localhost:4000/user/upload' />
  </React.StrictMode>,
)
