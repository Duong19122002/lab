import { getAll } from "../api/product1";


const Products ={
    async render(){
        const {data}=await getAll();

        return /*html*/`
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        ${data.map((post)=>`
        <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div class="flex items-end justify-end h-56 w-full bg-cover" >
        <a class=" h-56" href="/#/products/${post.id}"><img src="${post.img}" alt="" /></a>
        </div>
        <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase"><a href="/#/products/${post.id}">${post.name}</a></h3>
            <span class="text-gray-500 mt-2">${post.price} </span>
        </div>
    </div>  
        `).join("")}
        </div>  
        `;
    }
};

export default Products;        