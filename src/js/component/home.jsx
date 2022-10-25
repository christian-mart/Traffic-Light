import React, { useState }  from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedLight , setSelectedLight] = useState("red")

	return (
		<div className="traffic-light">
			<div onClick={() => setSelectedLight ("red")} className={"light red" + (selectedLight === "red" ? " glow" : "")}></div>
			<div onClick={() => setSelectedLight ("yellow")} className={"light yellow"+(selectedLight === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setSelectedLight ("green")} className={"light green"+(selectedLight === "green" ? " glow" : "")}></div>	
		</div>
	);
};



export default Home;
