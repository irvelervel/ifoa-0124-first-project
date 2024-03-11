// creiamo un componente con i superpoteri, un componente A CLASSE!
import { Component } from 'react'
// questo Component è il più grande e generico componente React esistente, preso direttamente dalla libreria

class ClassComponent extends Component {
  // l'unico metodo obbligatorio di un componente a classe si chiama "render"

  // le props in un componente a classe sono sempre dentro un oggetto, raggiungibile da this.props
  render() {
    return (
      <div>
        <h3 className="my-h3">Componente a classe! {this.props.saluto}</h3>
      </div>
    )
  }
}

export default ClassComponent
