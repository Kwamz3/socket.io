import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';


function App() {
  const [score, setScores] = useState({})
  const socket = io("http://localhost:3000");

  function connectSocket(){
    socket.on("connect", () => {
      console.log("socket connected", socket.id);
    });
  }
  
  function handleInput(event) {
    let { name, value } = event.target;
    let currentObj = { [name]: value };
    
    setScores((prev) => ({
      ...prev, ...currentObj
    }));
    
  }
  console.log(score);
  
  function sendScores() {
    console.log(score)
    socket.emit("scores", score)
  }
  
  useEffect(() => {
    connectSocket();
  }, [])

  return (
    <>
      <Header props='React Multiplayer Dashboard'></Header>

      <Input name='name'
        placeholder='Enter your name'
        handleInput={handleInput}></Input>
      
      <Input name='score'
        placeholder='Enter your score'
        handleInput={handleInput}></Input>
      
      <Button props='Publish Scores'
        onClick= {sendScores}></Button>
    </>
  );
}

export default App
