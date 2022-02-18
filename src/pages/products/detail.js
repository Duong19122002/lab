import { get } from "../../api/product";
import { addTocart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../../components/header"
const DetailProduct = {
    async render(id) {
        const { data } = await get(id);
    return /*html*/ `
    ${Header.render()}
<main class="grid place-items-center  bg-white max-w-7xl mx-auto my-12">
  <section class="max-w-7xl mx-auto py-10 grid grid-cols-2 gap-8 py-10 px-5  bg-gray-100 rounded-md shadow-lg w-3/4 md:max-w-2xl">
    <div class="text-indigo-500 flex flex-col justify-between">
      <img class=" h-96 w-96" src="${data.img}" />
    </div>
    
    <div class="text-indigo-500">   
      <h3 class="uppercase text-black text-2xl font-medium">${data.name}</h3>
      <small class="text-black">${data.desc}</small>
      <h3 class="text-2xl font-semibold mb-7">${data.price}$</h3>

      <div>
      <input type="number" id="inputValue" class="border border-gray-500" />
  </div>
      <div class="flex gap-0.5 mt-4">
        <button id="btnAddToCart" class="bg-black hover:bg-red-500 focus:outline-none transition text-white uppercase px-8 py-3">add to cart</button>
        <button id="btnAddToCart" class="bg-red-600 hover:bg-black focus:outline-none transition text-white uppercase p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>
        </button>
      </div>
    </div>
  </section>
</main>




        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector('#btnAddToCart');
        const inputValue = document.querySelector('#inputValue');
        btnAddToCart.addEventListener('click', async () => {
          const { data } = await get(id);
          addTocart({...data, quantity: inputValue.value ? +inputValue.value : 1}, () => {
              toastr.success("Đã thêm");
          })
        })
    }
};
export default DetailProduct;