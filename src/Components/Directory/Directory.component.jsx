import React from "react";
import MenuItem from "../menu-item/menu-item.component";
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
				{data.map(({ id, ...otherSctionProps }) => (
					<MenuItem key={id} {...otherSctionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
