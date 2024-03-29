import React, { Component } from 'react';
import '../App.css';

class UserAdd extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.addUser();
  }

  // Demana afegir usuari a la API
  getList = () => {
    fetch('/api/addUser')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>User to register</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No User to register</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default UserAdd;