import React, { Component } from 'react';
import './App.css';
import Keyboard from './Components/Keyboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [{
        key: 'Q',
        keyCode: 81,
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
      },
      {
        key: 'W',
        keyCode: 87,
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
      },
      {
        key: 'E',
        keyCode: 69,
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
      },
      {
        key: 'A',
        keyCode: 65,
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
      },
      {
        key: 'S',
        keyCode: 83,
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
      },
      {
        key: 'D',
        keyCode: 68,
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
      },
      {
        key: 'Z',
        keyCode: 90,
        id: 'Kick-n\'-Hat',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
      },
      {
        key: 'X',
        keyCode:88,
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
      },
      {
        key: 'C',
        keyCode: 67,
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
      }],
      currentText: ''
    }
    this.changeText = this.changeText.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.myRef = React.createRef();
  }
  changeText(text) {
    this.setState({
      currentText: text
    })
  }
  handleKeyPress(e) {

    const drumKey = this.state.sounds.find(obj => obj.keyCode === e.keyCode);
    console.log(drumKey);
    console.log(this.refs);
    // if(drumKey) {
    //   this.refs["drumButton" + drumKey.key].click();
    //   this.refs["drumButton" + drumKey.key].focus();
    //   this.refs["drumButton" + drumKey.key].blur();
    // }

    var keyNumber;
    for (let i = 0; i < this.state.sounds.length; i++) {
      keyNumber = this.state.sounds[i].keyCode;
      if (keyNumber === e.keyCode) {
        var sound = document.getElementById(this.state.sounds[i].key);
        sound.play();
        this.changeText(this.state.sounds[i].id);
        // console.log(this.myRef);
        // console.log(this); //trying to access the specific button. No luck so far
        // this.refs["drumButton" + this.state.sounds[i].key].click();
        // this.refs["drumButton" + this.state.sounds[i].key].focus();
        // this.refs["drumButton" + this.state.sounds[i].key].blur();
      }
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
    render() {
      return (
        <div id="drum-machine" className="App container-fluid">
          <div className="row">
            <div className="container-fluid col-xs-12 col-sm-8 col-md-6">
              <Keyboard sounds={this.state.sounds} 
                currentText={this.state.currentText} 
                changeText={this.changeText}
                handleKeyPress={this.handleKeyPress}
                forwardedRef={this.myRef} />
            </div>
          </div>
        </div>
      );
    }
}

export default App;
