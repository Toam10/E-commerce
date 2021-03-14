import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySection } from '../../redux/directory/directory.selectors'	
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
	<div className='directoryMenu'>
		{sections.map(({ id, ...otherSctionProps }) => (
			<MenuItem key={id} {...otherSctionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
