// import React, { useState } from "react";
import React from "react";

export default function About(props) {
    /*
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black"
    })

    const [btnText, setBtnText] = useState("Enter Dark Mode")

    const toggleDark = () =>{
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                border: "1px solid black"
            })
            setBtnText("Enter Dark Mode")
        }
        else{
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setBtnText("Enter Light Mode")
        }
    }*/

    let myStyle = {
        color: props.mode === 'dark' ? "white" : "#042743",
        backgroundColor: props.mode === 'dark' ? "rgb(36 74 104)" : "white",
        border: "2px solid",
        borderColor: props.mode === 'dark' ? "white" : "black"
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? "white" : "black" }}>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="card" >
                    <h2 className="mb-0" >
                        <button className="btn btn-block text-left" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze you Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h2 className="mb-0">
                        <button className="btn btn-block text-left collapsed" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div className="card" >
                    <h2 className="mb-0">
                        <button className="btn btn-block text-left collapsed" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Bandwidth compartible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-3" onClick={toggleDark}>{btnText}</button> */}
        </div>
    )
}