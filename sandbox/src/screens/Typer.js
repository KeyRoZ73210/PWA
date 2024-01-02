import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const LOREM_IPSUM = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.`;

function Typer(props) {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleClick = () => {
    if (!start) {
      setStart(true);
      setTimer(0);
    }
  };

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);

    // Vérifier si le texte correspond et arrêter le compteur
    if (event.target.value === LOREM_IPSUM) {
      setStart(false);
    }
  };

  return (
    <div className="d-flex">
      <div className="col-12 col-lg-6">
        <p>{LOREM_IPSUM}</p>

        {start ? (
          <Button name="Start" className="btn-primary d-none" onClick={handleClick} />
        ) : (
          <Button name="Start" className="btn-primary" onClick={handleClick} />
        )}
      </div>

      <div className="col-12 col-lg-6">
        {start ? (
          <div>
          <label>
            <textarea name="postContent" rows={7} cols={60} onChange={handleInputChange} />
          </label>
          <h1>Timer: {timer} seconds</h1>
          </div>
          
        ) : (
          <div> </div>
        )}
        {inputText === LOREM_IPSUM && <p>Bien joué!</p>}
        {inputText === LOREM_IPSUM && <h1>Timer: {timer} seconds</h1>}
      </div>
    </div>
  );
}

export default Typer;
