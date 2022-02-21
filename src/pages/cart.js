import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CartPage = {
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return /*html*/ `   
        </table>
        <!-- component -->

      
<div class="flex justify-center my-6">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<polyline points="15 6 9 12 15 18" />
</svg>
<a href="/#/about"><p class="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p> </a>
  <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
    <div class="flex-1">
      <table class="w-full text-sm lg:text-base" cellspacing="0">
        <thead>
          <tr class="h-12 uppercase">
            <th class="hidden md:table-cell"></th>
            <th class="text-left">Tên Sản Phẩm</th>
            <th class="lg:text-right text-left pl-5 lg:pl-0">
              <span class="lg:hidden" title="Quantity">Qtd</span>
              <span class="hidden lg:inline">Số Lượng</span>
            </th>
            <th class="hidden text-right md:table-cell">Giá Sản Phẩm</th>
            <th class="text-right">Tổng Tiền</th>
          </tr>
        </thead>
        <tbody>
          ${cart.map(item=>`
          
          <tr>
            <td class="hidden pb-4 md:table-cell">
              <a href="#">
                <img src="${item.img}" class="h-16 ">
              </a>
            </td>
            <td>
              <a href="#">
                <p class="mb-2 md:ml-4">${item.name}</p>
                <form action="" method="POST">
                  <button type="submit" data-id="${item.id}" class="btn btn-remove" class="text-red-700 md:ml-4">
                    <small>(Xóa Sản Phẩm)</small>
                  </button>
                </form>
              </a>
            </td>
            <td class="justify-center md:justify-end md:flex mt-6">
              <div class="w-20 h-10">
                <div class="relative flex flex-row w-full h-8">
                <button data-id="${item.id}" class="btn btn-increase">+</button>
                <input type="number" value="${item.quantity}"
                  class="w-full font-semibold text-center text-gray-700 bg-white outline-none focus:outline-none hover:text-black focus:text-black" />
                  <button data-id="${item.id}" class="btn btn-decrease">-</button>
                  </td>
                </div>
              </div>
            </td>
            <td class="hidden text-right md:table-cell">
              <span class="text-sm lg:text-base font-medium  ">
               ${item.price}
              </span>
            </td>
            <td class="text-right">
              <span class="text-sm lg:text-base font-medium">
                20.00€
              </span>
            </td>
          </tr> 
          `).join("")}
          
         
        </tbody>
      </table>
      <hr class="pb-6 mt-6">
      <div class="my-4 mt-6 -mx-2 lg:flex">
        <div class="lg:px-2 lg:w-1/2">
          
          
        </div>
        <div class="lg:px-2 lg:w-1/2">
          
          <div class="p-4">
              
              <a href="#">
                <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                  <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                  <span class="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
        `
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if(btn.classList.contains('btn-increase')){
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    })
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    })
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    })
                }
            })
        })
    }
}
export default CartPage;