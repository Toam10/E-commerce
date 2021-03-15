import { createSelector } from "reselect";

const selectShopData = (state) => state.shopData;

export const selectCollections = createSelector(
	[selectShopData],
	(shopData) => shopData.collections
);

export const selectCollectionFromPreview = createSelector([selectCollections], (collections) =>
	Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParams) => {
	return createSelector([selectCollections], (collections) => collections[collectionUrlParams]);
};
