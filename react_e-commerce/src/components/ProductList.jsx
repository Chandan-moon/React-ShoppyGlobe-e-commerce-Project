import { useEffect, useState } from "react";


function ProductList() {


let Api = "https://dummyjson.com/products";


const [items, setItems] = useState([]);




useEffect(()=> {

async function ApiCall() {

const response = await fetch(Api)

const data = await response.json();

console.log(data.products[0].images)

setItems(data.products[0])


}

ApiCall();


}, [])




return (

<div>

<img src={items.images} alt="" width="200px" height="200px" />

</div>


)


}

export default ProductList;
