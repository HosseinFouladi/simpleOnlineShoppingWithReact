import { PAGE_SIZE } from "../../helpers/Constants";

export const pagination=(products,page_number)=>{

    const start=(page_number-1)*PAGE_SIZE;
    const end=page_number*PAGE_SIZE;
    const product=products.slice(start,end)?products.slice(start,end):products.slice(start);
    return product;

  }

  export const calculatePages=(products)=>{
    const pages=Math.round(products/PAGE_SIZE);
    return pages;
  }