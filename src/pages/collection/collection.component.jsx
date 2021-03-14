import React from "react";
import CollectionItem from "../../Components/collection-components/collection-item/collection-item.component";
import { connect } from "react-redux";
import "./collection.styles.scss";
import { selectCollection } from "../../Components/redux/shop/shop.selectors";
const CollectionPage = ({ collection, match }) => {
	console.log(match.params.collectionId);
	console.log(collection);
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
