import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState("");
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmitValue = (e) => {
        alert(`Se ha registrado su dato: ${inputValue}`)
        e.preventDefault();
        fetch('', {
            method: 'POST',
            body: JSON.stringify(inputValue)
        }).then((response) => console.log(response));
        
    }
    return (
        <div className="App">
            <h1>Prueba Tecnica</h1>
            <form onSubmit={(e) => onSubmitValue(e)}>
                <input type="text" onChange={(e) => onChangeInput(e)} value={inputValue} />
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
