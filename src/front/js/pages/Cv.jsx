import React, { useContext } from "react";
import { Context } from "../store/appContext";

import bodyCv from "../component/bodyCv/bodyCv.jsx"
import footerCv from "../component/footerCv/footerCv.jsx";
import headerCv from "../component/headerCv/headerCv.jsx";

export const Cv = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
  			<headerCv/>
			<bodyCv/>
			<footerCv/>
	  </>
	);
};
