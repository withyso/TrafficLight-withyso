import React from "react";
import { YellowLight } from "./YellowLight";
import { GreenLight } from "./GreenLight";
import { RedLight } from "./RedLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex" id="trafic-light">
			<div className="" id="post"></div>
			<div className="" id="body">
				<YellowLight />
				<GreenLight />
				<RedLight />
			</div>
		</div>
	);
};

export default Home;
