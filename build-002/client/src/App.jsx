// import { useState } from 'react';
import io from 'socket.io-client'
import './App.css'
import { useEffect } from 'react';

function App() {
  const socket = io('localhost:3000')

  function connectSocket(){
    socket.on("conection", (socket) => {
      console.log(socket)
    })
  }

  useEffect(() => {
    connectSocket();
  });

  return (
    <>
        <h1>React Multiplayer Dashboard</h1>
    </>
  );
}

export default App
