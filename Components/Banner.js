



export default function Home() {
  return (
    <div className="banner">
      <div className="banner-text">
        <h5>Hi, my name is</h5> 
        <br />
        <h1 className="banner-name">Nora Chamseddin.</h1>
        <br />
        <h1 className="banner-desc">I build things with code.</h1>
        <h5 className="banner-cof">Enjoy some coffee while you scroll!</h5>
        <a className="banner-button" href="/Resume.pdf" target="_blank"
        >Résumé</a>
      </div>
      <div className="container">
    <div className="coffee-header">
      <div className="coffee-header__buttons coffee-header__button-one"></div>
      <div className="coffee-header__buttons coffee-header__button-two"></div>
      <div className="coffee-header__display"></div>
      <div className="coffee-header__details"></div>
    </div>
    <div className="coffee-medium">
      <div className="coffe-medium__exit"></div>
      <div className="coffee-medium__arm"></div>
      <div className="coffee-medium__liquid"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
      <div className="coffee-medium__cup"></div>
    </div>
    <div className="coffee-footer"></div>
  </div>
    </div>
    
    );
}
/*
import React from 'react';

export default function Home() {
  // Initialize state variables
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');

  // Array of texts to be displayed in the banner
  const texts = [
    'I build things with code.',
    'I love to learn new technologies.',
    'I am a full-stack developer.',
  ];

  // Use the useEffect hook to update the banner text
  React.useEffect(() => {
    // Get the current text
    const text = texts[currentTextIndex];
    // Set the current text to an empty string
    setCurrentText('');
    // Use a timeout to add each character of the text one by one
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCurrentText(text.slice(0, i));
      if (i === text.length) {
        clearInterval(interval);
      }
    }, 100);
  }, [currentTextIndex]);

  return (
    <div className="banner">
      <div className="banner-text">
        <h5>Hi, my name is</h5>
        <br />
        <h1 className="banner-name">Nora Chamseddin.</h1>
        <br />
        <h1 className="banner-desc">I build things with code</h1>
        <h5>I am also a</h5>
        <h1 className="banner-desc">{currentText}</h1>
        <button className="banner-button">Resume</button>
      </div>
      <img className="banner-img" src="/path/to/image.jpg" alt="Banner Image" />
    </div>
  );
}
/*
export default function Home() {
  return (
    <div className="banner">
      <div className="banner-text">
        <h5>Hi, my name is</h5> 
        <br />
        <h1 className="banner-name">Nora Chamseddin.</h1>
        <br />
        <h1 className="banner-desc">I build things with code.</h1>
        <button className="banner-button">Resume</button>
      </div>
      <img className="banner-img" src="/path/to/image.jpg" alt="Banner Image" />
    </div>
  );
}

*/