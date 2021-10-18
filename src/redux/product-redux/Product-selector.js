import { createSelector } from "reselect";

export const product=state=>state.products;
export const selectProducts=createSelector(
    [product],
    products=>products.products
)
export const selectPageNumber=createSelector(
    [product],
    products=>products.pageNumber
)

export const selectFilteredProduct=createSelector(
    [product],
    products=>products.filteredproducts
)

export const selectPageCount=createSelector(
    [product],
    products=>products.pages
)

export const selectCurrentProduct=createSelector(
    [product],
    products=>products.currentProduct
)

export const selectSearchedProducts=createSelector(
    [product],
    products=>products.searchedProducts
)