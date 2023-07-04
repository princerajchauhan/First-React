import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        // console.log("handleUpClick is clicked")s
        props.showAlert("Converted To UpperCase", "info")
    }

    const handleonChange = (event) => {
        setText(event.target.value)
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted To LowerCase", "primary")
    }

    const handleCapClick = () => {
        let arr = text.split(' ')
        let capText = []
        arr.forEach(val => {
            val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
            capText.push(val)
        })
        capText = capText.join(' ')
        setText(capText)
        props.showAlert("Converted To Capitalize", "secondary")
    }

    const handleClrClick = () => {
        if (window.confirm("Do u really want to clear all the text ?")) {
            setText("")
        }
        props.showAlert("Text Cleared !", "danger")
    }

    const handleCopyText = () => {
        let text = document.getElementById('box')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied !", "info")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ")
        setText(newText)
        props.showAlert("Extra spaces removed !", "warning")
    }

    const [text, setText] = useState("");           // react hooks
    // text = "Hello world"    // wrong way to change the text
    // setText("New Text")     // correct way to change the text

    var textWord = text.split(' ').length
    var textChar = text.length
    if (text.endsWith(' ')) {
        textWord = textWord - 1
        textChar = textChar - 1
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? "black" : "white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === 'light' ? "white" : "grey", 
                    color: props.mode === 'light' ? "black" : "white" }} id="box" rows="8"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-dark mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-success" onClick={handleCapClick}>Convert To Capitalize</button>
                <button className="btn btn-danger mx-3" onClick={handleClrClick}>Clear Text</button>
                <button className="btn btn-secondary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-warning mx-3" onClick={handleCopyText}>Copy Text</button>
            </div>

            <div className="container my-4" style={{color: props.mode === 'light' ? "black" : "white"}}>
                <h1>Your text summary</h1>
                <p>{textWord} words and {textChar} characters.</p>
                <p>{(0.008 * textWord).toFixed(3)} Minutes read</p>
            </div>
        </>
    )
}