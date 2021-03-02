import React from "react";
import "./menuItem.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`menuItem ${size}`}>
			<div
				className='background'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
