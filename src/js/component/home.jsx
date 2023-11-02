import React from "react";
import { RedLight } from "./RedLight";
import { OrangeLight } from "./OrangeLight";
import { GreenLight } from "./GreenLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex" id="trafic-light">
			<div className="" id="post"></div>
			<div className="" id="body">
				<RedLight />
				<OrangeLight />
				<GreenLight />
			</div>
		</div>
	);
};

export default Home;
