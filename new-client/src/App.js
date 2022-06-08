import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [inputValue, setInputValue] = useState("");
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmitValue = (e) => {
        alert(`Se ha registrado su dato: ${inputValue}`);
        axios.post("http://localhost:5000/", { inputValue }).then(res => console.log(res));
        e.preventDefault();
    };
    return (
        <div className="App">
            <h1>Prueba Tecnica</h1>
            <form onSubmit={(e) => onSubmitValue(e)}>
                <input
                    type="text"
                    onChange={(e) => onChangeInput(e)}
                    value={inputValue}
                />
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
