import React from 'react';
import Key from './Key'

const Keyboard = (props) => {
  return (
    <div id="display" className="card">
          <div className="row">
            <Key sound={props.sounds[0]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
            <Key sound={props.sounds[1]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
            <Key sound={props.sounds[2]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
          </div>
          <div className="row">
            <Key sound={props.sounds[3]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
            <Key sound={props.sounds[4]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
            <Key sound={props.sounds[5]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
          </div>
          <div className="row">
            <Key sound={props.sounds[6]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
            <Key sound={props.sounds[7]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
            <Key sound={props.sounds[8]} 
              changeText={props.changeText} 
              handleKeyPress={props.handleKeyPress}
              handleKeyUp={props.handleKeyUp}
              forwardedRef={props.forwardedRef} />
          </div>
        <p className="id-box">{props.currentText}</p>
    </div>
  )
}

export default Keyboard;