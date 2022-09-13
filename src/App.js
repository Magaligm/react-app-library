import React from "react";
import "./App.css";

import Menu from "./Menu";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 0,
          raiting: 4,
          title: "Harry Poter y el caliz de fuego",
          image: "libro01.gpg",
        },
        { id: 1, raiting: 3, title: "The shining", image: "libro02.jpg" },
        { id: 2, raiting: 5, title: "Codigo Da Vinci", image: "libro03.jpg" },
        { id: 3, raiting: 5, title: "El principito", image: "libro04.jpg" },
        { id: 4, raiting: 5, title: "SobreNatural", image: "libro05.jpg" },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <Menu title="Amozon" />
        <List items={this.state.books} />
      </div>
    );
  }
}

export default App;
