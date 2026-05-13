import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const [formInputs, setFormInputs] = useState({});
  const handleInput = (event) => {
    const { info, value } = event.target;

    let eventObj = { [info]: value };

    setFormInputs((prev) => ({
      ...prev,
      ...eventObj,
    }));
  };

  const handleSubmit = () => {
    console.log(formInputs);
  };

  return (
    <>
      <Header title="CRUD OPERATIONS"></Header>

      <div className="input-div">
        <Input
          onChange={handleInput}
          placeholder={"Enter your name"}
          info={"name"}
        ></Input>
        <Input
          onChange={handleInput}
          placeholder={"Enter your age"}
          info={"age"}
        ></Input>
        <Input
          onChange={handleInput}
          placeholder={"Enter your phone number"}
          info={"phoneNumber"}
        ></Input>
        <Button onClick={handleSubmit} title={"Add Data"}></Button>
      </div>
    </>
  );
}

export default App;
