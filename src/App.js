import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "" },
      tasks: [],
    };
  }
}

export default App;
