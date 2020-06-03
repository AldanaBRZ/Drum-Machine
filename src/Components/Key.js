import React, {Component} from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const handleClick = (e) => {
      const sound = document.getElementById(this.props.sound.key);
      sound.play();
      this.props.changeText(this.props.sound.id);
    }
    return (
      <div className="col-4">
        <button type="button"
          id={this.props.sound.id}
          className="btn btn-block drum-pad"
          ref={"drumButton" + this.props.sound.key}
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