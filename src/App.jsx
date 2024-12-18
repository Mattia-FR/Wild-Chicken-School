import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ListCards from "./components/ListCards";
import Footer from "./components/Footer";
import data from "../chickenTab.json";

function App() {
	const chickenTabProfs = data.chickenTab.filter(
		(element) => element.position === "Teacher",
	);
	const chickenTabStudents = data.chickenTab.filter(
		(element) => element.position === "Student",
	);
	return (
		<>
			<Navbar />
			{/* faire deux ListCards avec filter() */}
			<ListCards chickenTab={chickenTabProfs} />
			<ListCards chickenTab={chickenTabStudents} />
			<Footer />
		</>
	);
}

export default App;
