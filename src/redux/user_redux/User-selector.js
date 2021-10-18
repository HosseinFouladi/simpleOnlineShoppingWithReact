import { createSelector } from "reselect";
export const user=state=>state.user;
export const selectCurrentUser=createSelector(
    [user],
    user=>user.currentUser
)
export const selectId=createSelector(
    [selectCurrentUser],
    currentUser=>currentUser.id
)

export const selectProductCount=createSelector(
    [user],
    user=>user.productCount
)
export const selectName=createSelector(
    [selectCurrentUser],
    currentUser=>currentUser.fullName
)
export const selectPopup=createSelector(
    [user],
    user=>user.popup
)