import {connect} from "frontity";

import Styling from "../assets/css";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const Root = ({state}) => {
	return(
		<>
			<Styling/>
			<Header/>
			<Body/>
			<Footer/>
		</>
	)
}

export default connect(Root);