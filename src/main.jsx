import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/General.css'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//Dependencias 

/*
npm install 
npm install prop-types
npm install react-router-dom
npm install classnames
npm install -g truffle
npm install ethers

*/