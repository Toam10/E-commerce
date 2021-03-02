import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.styles.scss";
const MenuItem = ({ title, imageUrl, size ,linkUrl ,history, match }) => {
	console.log(match)
	return (
		<div 
		onClick={()=> history.push(`${match.path}${linkUrl}`)}
		className={`menuItem ${size}`}>
			<div
				className='background'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
