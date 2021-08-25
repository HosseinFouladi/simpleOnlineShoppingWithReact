export const API_URL={
    SIGN_UP:"http://localhost:8080/user/signup",
    LOGIN:"http://localhost:8080/user/login",
    PRODUCT_LIST:"http://localhost:8080/product/productsList",
    FIND_USER:"http://localhost:8080/user",
    FIND_PRODUCT:"http://localhost:8080/product/find/",
    ADD_TO_CART:"http://localhost:8080/product/addToCart/",
    DELETE_PRODUCT:"http://localhost:8080/product/delete/"
}
export const PAGE_SIZE=4;
export const USER_ID=window.location.href.split("/")[5];
export const PRODUCT_ID=window.location.href.split("/")[6];