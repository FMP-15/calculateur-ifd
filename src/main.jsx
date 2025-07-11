import React from 'react'
import ReactDOM from 'react-dom/client'
import CalculateurImpôt from './App.jsx'
import './index.css' // tu peux supprimer cette ligne si tu n’as pas de fichier CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculateurImpôt />
  </React.StrictMode>
)
