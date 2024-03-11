const Greetings = function (props) {
  // il parametro di un componente a funzione, dove riceveremo TUTTE le props, è sempre UN OGGETTO
  // props.nameToGreet
  return (
    <div>
      {/* dovrei mettere al posto di "Stefano" il valore di quel "nameToGreet", che ogni invocazione di Greetings riceve */}
      <p>Ciao, {props.nameToGreet || 'Utente'}!</p>
      {/* Nel caso la prop "nameToGreet" non venga passata (per errore), mettiamo un valore di default con l'OR || */}
    </div>
  )
}

export default Greetings
