import react from "react";
import load from "../img/loader.gif"
let loadingGif = (props)=>{
	return (
		<div>
			<img src={load} className="loading-gif"/>
		</div>

	)
}
export default loadingGif;