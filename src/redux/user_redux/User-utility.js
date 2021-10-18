export const addProduct=(currentUser,productForAdd)=>{

    return {
        ...currentUser,
        products:[...currentUser.products,productForAdd]
    }
}

export const deleteproduct=(currentUser,product)=>{

    const filteredUser=currentUser.products.filter(item=>{
       return item.id!==product.id;
    });

    return{
        ...currentUser,
        products:[...filteredUser]
    }

}