import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { LightsTogether } from "./LightsTogether";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex" id="trafic-light">
			<div className="" id="post"></div>
			<div className="" id="body">
				<LightsTogether/>
			</div>
		</div>
	);
};

export default Home;
