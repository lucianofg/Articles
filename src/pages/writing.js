import React from "react";
import {CancelButton, OkayButton, SignButton} from "./components/buttons";
import TextEditor from "./components/text-editor";
import Logo from "./components/logo";

export default function Writing(props) {
    return (
        <div>
            <div className="writing-top-bar">
                <Logo />
                <CancelButton text="Cancel" />
                <SignButton text={"Publish"} />
            </div>
            <div className="writing-text-editor">
                <TextEditor />
            </div>
            <div className="writing-bottom-area">
                <div className="writing-add-themes">
                    <button>Add themes</button>
                </div>
                <div className="writing-selling-prices">
                    <div>Selling prices</div>
                    <input type="number" placeholder="Teste"/>
                </div>
            </div>
        </div>
    )
}