import React from "react";

export default function TextEditor() {
    return (
        <div>
            <div>
                <button>Add Image</button>
                <button>Add Video</button>
            </div>
            <div>
                <input id="title" type="text"/>
                <textarea></textarea>
            </div>
        </div>
    )
}