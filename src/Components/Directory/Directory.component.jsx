import React from "react";
import MenuItem from "../MenuItem/MenuItem.component";
import { sections } from "./directory.data";
import "./directory.styles.scss";
class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			data: sections,
		};
	}
	render() {
		const { data } = this.state;
		return (
			<div className='directoryMenu'>
				{data.map(({ title, imageUrl, id , size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
				))}
			</div>
		);
	}
}

export default Directory;
