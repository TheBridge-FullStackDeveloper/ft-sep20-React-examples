import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <footer>
        <div className="logo">
          &copy; Copyright {this.props.company}
        </div>
      </footer>
    );
  }
}

export default Footer;
