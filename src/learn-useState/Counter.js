import React, { useState } from "react";
import { Students } from "../learn-useContext";
import logo from "../logo.svg";
import "./Counter.css";

export const StudentsContext = React.createContext("");

export default function Counter() {
	const [showImage, setShowImage] = useState(true);
	const [count, setCount] = useState(0);
	const countUp = () => {
		setCount(count + 1);
	};
	const countDown = () => {
		setCount(count - 1);
	};
	const hideImage = () => {
		setShowImage(!showImage);
	};
	const [input, setInput] = useState("");
	const inputHandler = (e) => {
		setInput(e.target.value);
	};
	const [inputContext, setInputContext] = useState("");
	return (
		<div className="Main">
			<p className="Text">Counter with useState</p>
			<p>KELOMPOK 19</p>
			<div className="ViewImage">
				<div className="ViewImage1">
					<img
						className="App-logo"
						style={{
							display: showImage === true ? "flex" : "none",
						}}
						src={logo}
						alt="logo"
					/>
				</div>
				<button className="Button" onClick={hideImage}>
					{showImage !== true ? "show" : "hide"}
				</button>
			</div>
			<p className="Text">{count}</p>
			<div className="ViewButton">
				<div className="ViewButton2">
					<button className="Button" onClick={countUp}>
						Up
					</button>
				</div>
				<div className="ViewButton1">
					<button className="Button" onClick={countDown}>
						Down
					</button>
				</div>
			</div>
			{/* useState */}
			<div>
				<p>Input Text</p>
				<input onChange={inputHandler} />
				<p>{input}</p>
				<br />
			</div>
			{/* useContext */}
			<StudentsContext.Provider value={{ setInputContext }}>
				<p>{inputContext}</p>
				<Students />
			</StudentsContext.Provider>
			<br />
			<br />
		</div>
	);
}
