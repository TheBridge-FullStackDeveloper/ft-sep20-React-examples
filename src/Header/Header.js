import React, { Component } from 'react'; 
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: this.props.company,
      model: "T",
      color: "black",
      year: 1927
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      // Añadir a estado
      this.setState({ ...this.state, cost: 8000 });

      // Modificar el estado
      this.setState({ color : "blue" });
    }, 3000)

    setInterval(() => {
      this.setState({ cost: this.state.cost - 1 });
    }, 4000)
  }

  getTimeMessage(time) {
    return <p>Son las {time}</p>
  }

  changeCost = () => {
    this.setState({ cost: 9000 });
  }
  
  render() {
    // Old-fashion non-React Vanilla style
    /*
    const logoBrand = `<div className="logo">
      ${this.props.company}
    </div>`;

    document.querySelector("header").innerHTML(logoBrand);
    */

    // New cool React style!
    const logoBrand = <div className="logo">
      {this.props.company ? this.props.company : "Mini ACME, S.L."}
      {/*this.props.company || "Mini ACME, S.L."*/}
    </div>;

    return (
      <header>
        {logoBrand}
        {this.getTimeMessage("12:34")}
        El precio es {this.state.cost} y el color {this.state.color}
        <button onClick={this.changeCost}>Resetear precio</button>
      </header>
    );
  }
}

export default Header;
