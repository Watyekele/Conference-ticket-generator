import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Form from "./Components/Form";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <div>
      <Form />
      <Ticket />
    </div>
  );
}

export default App;
