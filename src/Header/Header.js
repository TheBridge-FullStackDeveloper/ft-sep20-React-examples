import React, { Component } from 'react'; 
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        <div className="logo">
          {this.props.company}
        </div>
      </header>
    );
  }
}

export default Header;
