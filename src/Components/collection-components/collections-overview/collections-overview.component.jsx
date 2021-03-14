import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionsOverView = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => {
				return <CollectionPreview key={id} {...otherCollectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverView);
