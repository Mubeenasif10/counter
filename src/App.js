import { useState } from 'react';
import './App.css';
import Intro from './Intro';

function App() {
  const [count, setCount] = useState(3);
  const [name, setName] = useState("Mubeen");
  const [friends, setFriends] = useState(["Zohaib", "Jazlan", "Aun"]);
  const [age, setAge] = useState(20);


  const increment = ()=> {
    setCount(count + 1);

  }

  const decrement = ()=> {
    if(count === 0) return;
    setCount(count - 1);
  }

  const changeNameHandler = ()=> {
    setName("Mubeen Asif");
  };

  const changeAge = ()=> {
    setAge(Math.floor(Math.random() * 35));
  };

  return (
    <div className='container'>
      {/* <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>

      <p>{name}</p>
      <button onClick={changeNameHandler}>Change Name</button>
      <p>{age}</p>
      <button onClick={changeAge}>Get Age</button> */}

      <Intro />
    </div>
  );
};

export default App;
