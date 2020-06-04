import React, {Component} from 'react';

class Key extends Component {
  
  render() {
    const handleClick = (e) => {
      const sound = document.getElementById(this.props.sound.key);
      sound.play();
      this.props.changeText(this.props.sound.id);
      const drumPad = document.getElementById(this.props.sound.id);
      drumPad.classList.add('pressed');
      setTimeout(() => {
        drumPad.classList.remove('pressed')
      }, 100)
    }

    return (
      <div className="col-4">
        <button type="button"
          className="btn btn-block drum-pad"
          key={this.props.sound.key}
          id={this.props.sound.id}
          onClick={handleClick}
          onKeyDown={this.props.handleKeyPress}>
          <audio src={this.props.sound.url} 
            id={this.props.sound.key} 
            autoPlay={false} 
            className="clip">
          </audio>
          <h3 id="btn-text">{this.props.sound.key}</h3>
        </button>
      </div>
    )
  }
  
}

export default Key;