import React, { useState, useEffect } from "react";

const BlinkingPrompt = ({prompt='_', blinkInterval=400}) => {

  const [showPrompt, setShowPrompt] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPrompt((showPrompt) => !showPrompt);
    }, blinkInterval);
    return () => clearInterval(interval);
  }, []);

  return <span className='blinkingPrompt' style={showPrompt?styles.displayPrompt:styles.hidePrompt}>{prompt}</span>
    
}

export default BlinkingPrompt;

const styles={
  displayPrompt:{visibility:'visible'},
  hidePrompt:{visibility:'hidden'}
}
