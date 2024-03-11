// creiamo il componente
// un componente React può semplicemente essere una funzione che RITORNA del JSX

const FirstComponent = function () {
  return (
    <div>
      <div>
        <h2 className="my-h2">Componente creato tramite FUNZIONE</h2>
      </div>
      <div>
        <h3>Altra cosa</h3>
      </div>
    </div>
  )
}

// per rendere disponibile FirstComponent al di fuori del proprio file è necessario ESPORTARLO

export default FirstComponent
// ora il componente è disponibile all'import in altri file
