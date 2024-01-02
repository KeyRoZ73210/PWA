import { useState , useEffect } from 'react';
import Button from "../components/Button";

function Counter(props) {

  // let number = 0;

  // function increment() {
  //   number++;
  // }

  function increment() {
    setNumber(number + 1)
  }

  function decrementer() {
    setNumber(number - 1)
  }

  function changementBord() {
    console.log("rendu")
  }

  useEffect(changementBord);

  const [number, setNumber] = useState(0);

  return (
    <div>
      <h3 className="text-center">Compteur</h3>

      <div className="d-flex justify-content-center">
        <h4>{number}</h4>
        <Button
        className="btn-secondary mx-5"
        onClick={increment}
        name="incrémenter"
        ></Button>
        <Button
        className="btn-secondary mx-5"
        onClick={decrementer}
        name="decrémenter"
        ></Button>
      </div>

    </div>
  )
}

export default Counter;