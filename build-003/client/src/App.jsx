import { useState } from "react";
import io from "socket.io-client";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [formInputs, setFormInputs] = useState({});
  const [crudData, setCrudData] = useState([]);
  const socket = io("localhost:3000");

  const handleInput = (event) => {
    const { name, value } = event.target;

    let eventObj = { [name]: value };

    setFormInputs((prev) => ({
      ...prev,
      ...eventObj,
    }));
  };

  const handleSubmit = () => {
    socket.emit("data", formInputs);

      socket.on("crudData", (response) => {
        console.log(response);
      });
  };

  return (
    <>
      <Header title="CRUD OPERATIONS"></Header>

      <div className="input-div">
        <Input
          onChange={handleInput}
          placeholder={"Enter your name"}
          name={"name"}
        />
        <Input
          onChange={handleInput}
          placeholder={"Enter your age"}
          name={"age"}
        />
        <Input
          onChange={handleInput}
          placeholder={"Enter your phone number"}
          name={"phoneNumber"}
        />
        <Button onClick={handleSubmit} title={"Add Data"} />
      </div>
    </>
  );
}

export default App;
