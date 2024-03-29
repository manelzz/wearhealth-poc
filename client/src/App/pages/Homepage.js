import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Homepage extends Component {
  render() {
    return (
    <div className="App">
      <h1 className=".headerStyle" >Wearing Health</h1>
      {/* Link to User.js */}
      <Link to={'./UserAdd'}>
        <button variant="raised">
            Registrar usuari
        </button>
      </Link>

      {/* Link to Data.js */}
      <Link to={'./DeviceAdd'}>
          <button variant="raised">
            Afegir Wearable
          </button>
      </Link>

      {/* Link to Data.js */}
      <Link to={'./DataAdd'}>
          <button variant="raised">
            Sincronitzar Dades Wearable
          </button>
      </Link>

        {/* Link to Data.js */}
      <Link to={'./UserRead'}>
          <button variant="raised">
            Visualitzar Usuari
          </button>
      </Link>

        {/* Link to Data.js */}
       <Link to={'./DataRead'}>
          <button variant="raised">
            Visualitzar Dades
          </button>
      </Link>

      </div>
    );
  }
}

//PropTypes
Homepage.propTypes = {
}

export default Homepage;
