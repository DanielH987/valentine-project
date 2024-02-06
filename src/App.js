import React, { useState } from 'react';
import './App.css';

function App() {
  React.useEffect(
    function () {
      document.title = `Happy Valentine`;
    }, []
  );

  const [yesButtonSize, setYesButtonSize] = useState(13);
  const [noButtonMessageIndex, setNoButtonMessageIndex] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0, position: 'static' });

  // URL for the image to show before clicking "Yes"
  const onlineGifUrl1 = 'https://gifdb.com/images/high/cute-love-window-kisses-yw6u6pvmy6uwh6hr.gif';
  // URL for the image to show after clicking "Yes"
  const onlineGifUrl2 = 'https://gifdb.com/images/high/cute-love-baby-kiss-pw26tcs2lnig9xob.gif';

  const noButtonMessages = [
    "No",
    "Sure? Even if I share my best chocolate?",
    "Reconsidered for a sweet day?",
    "No? Not even for your favorite dessert?",
    "Tempted by love songs and dances?",
    "Reconsider for movie night and popcorn?",
    "Promise to be the best Valentine with surprises?",
    "Absolutely sure? I've got surprises!",
    "No? How about quality time, no strings?",
    "Thought it over for laughter and fun?",
    "Reconsider for puppy videos and coziness?",
    "Say yes for a secret adventure?",
    "Really sure? Night under the stars?",
    "No? Even if I let you win at games?",
    "Reconsider? Our favorite songs playlist!",
    "No? I promise smiles and laughs all day!"
];

  const handleNoButtonClick = (event) => {
    // Move the button to a new position on the first click
    const newX = Math.random() * window.innerWidth - event.target.offsetWidth;
    const newY = Math.random() * window.innerHeight - event.target.offsetHeight;
    setNoButtonPosition({
      left: newX > 0 ? newX : 0,
      top: newY > 0 ? newY : 0,
      position: 'absolute'
    });
    // The rest of your existing logic to change the button size and message index
    setYesButtonSize(currentSize => currentSize + 10);
    setNoButtonMessageIndex(currentIndex => (currentIndex + 1) % noButtonMessages.length);
  };

  const handleYesButtonClick = () => {
    setYesClicked(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!yesClicked ? (
          <>
            <img src={onlineGifUrl1} alt="Cute" style={{ maxWidth: '100%', maxHeight: '400px' }} />
            <p>Will you be my Valentine?</p>
            <div>
              <button 
                onClick={handleYesButtonClick} 
                className="button-yes"
                style={{fontSize: `${yesButtonSize}px`}}
              >
                Yes
              </button>
              <button 
                onClick={handleNoButtonClick} 
                className="button-no"
                style={{...noButtonPosition}}
              >
                {noButtonMessages[noButtonMessageIndex]}
              </button>
            </div>
          </>
        ) : (
          <>
            <img src={onlineGifUrl2} alt="Yes" style={{ maxWidth: '100%', maxHeight: '400px' }} />
            <p>Yay! You've just made my heart skip a beat! Best. Valentine's. Ever. 💖</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
