import SimpsonsCard from './components/SimpsonsCard';
import './App.css';
import React  from 'react';
import axios from 'axios';

const randomCard = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image : 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: randomCard
    };
    this.getCard = this.getCard.bind(this);
  }
  getCard() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        card: data[0] ,
      })
    })
  }
  render () {
  return (
    <div className="App">
      <SimpsonsCard card={this.state.card} />
      <button type='button' onClick={this.getCard}>change</button>
    </div>
  );
}
}
export default App;
