import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';
import Table from './components/Table';


function App() {
  const [score, setScores] = useState({})
  const [scores, setPlayerScores] = useState([])
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

  function sendScores() {
    socket.emit("scores", score);

    socket.on("playerScores", (playerScores) => {
      setPlayerScores(playerScores);
    })
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
        onClick={sendScores}></Button>
      
      <Table position='1'
        name='Name'
        score='Score'
        score
      ></Table>
    </>
  );
}

export default App
