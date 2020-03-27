import React from 'react';
import './App.css';
const api = 'http://api.icndb.com/jokes/random';
const imgChack = "http://amicity.a.m.pic.centerblog.net/4f3f41d8.jpg";
let json;
class App extends React.Component {
  state = {
    apiha: api,
    joke: '',
    bang: "BANG!!!",
    img: ''
  }
  
  async componentDidMount() {
    const data = await fetch(this.state.apiha);
    console.log(data);
    json = await data.json();
    console.log(json.value.joke)
    this.setState({
      img: imgChack
    })
    return json;
  }
  handleJoke = () => {
    this.componentDidMount()
    this.setState({
      joke: json.value.joke,
      bang: null
    })
    console.log(this.state.joke)
  }

  render() {
    return (
      <div>
      <div className="img-container" onClick={this.handleJoke}>
      <img src={this.state.img}/>
      <h1>{this.state.bang}</h1>
      <h2>{this.state.joke}</h2>
      </div>
      </div>
    )
  }
}
export default App;
