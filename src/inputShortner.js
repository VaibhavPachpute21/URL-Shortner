import { Component } from "react";

const InputShortner= ()=>{
    return (
        <div className="inputContainer">
            <h1>URL <span>Shortner</span></h1>
            <div>
                <input type="text" placeholder="Paste a link to shorten it"></input><button>Shorten</button>
            </div>
        </div>

    );
}

export default InputShortner;