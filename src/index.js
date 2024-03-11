import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// questa root è un elemento radice creato a partire da un div vuoto (con id="root") che si trova in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'))
// root sarà il punto di partenza della nostra app React

// ora stiamo utilizzando questo elemento radice per montarci dentro App
// App è un COMPONENTE REACT
root.render(<App />)
// possiamo montare SOLAMENTE 1 componente in questo index.js
