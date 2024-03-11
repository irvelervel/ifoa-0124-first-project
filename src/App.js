import logo from './logo.svg'
import './App.css'
// importo FirstComponent dal file omonimo
import FirstComponent from './components/FirstComponent'
// non è necessario inserire l'estensione ".jsx"

// importo componente a classe
import ClassComponent from './components/ClassComponent'

import Greetings from './components/Greetings'

// App è un COMPONENTE REACT
// un componente React è una porzione di interfaccia riutilizzabile
// In questa forma molto base un componente React può essere scritto come una FUNZIONE che RITORNA del JSX

// JSX è un linguaggio molto simile ad HTML
// tutti i nomi dei tag sono uguali, è possibile annidare gli elementi, è tutto uguale tranne:
// - tutti gli attributi "class" diventano "className"
// - è possibile interpolare nel JSX del codice molto facilmente, inserendo un paio di graffe {} intorno alle variabili

function App() {
  const myName = 'Stefano'

  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />

        <ClassComponent saluto="ciaone" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>Prima app React! Hello world! Mi chiamo {myName}</p>

        <Greetings />
        {/* Bello il componente Greetings! Però purtroppo sa salutare solamente Stefano :( */}
        {/* Ci sarebbe bisogno di un componente Greetings dinamico, -parametrico-, in grado di salutare chi voglio io ogni volta */}

        <Greetings nameToGreet="Luca" />
        <Greetings nameToGreet="Paolo" />
        <Greetings nameToGreet="Stefano" />
        {/* È l'invocazione del componente che passa le props! */}
      </header>
    </div>
  )
}

export default App
