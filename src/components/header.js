import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";
const Header = {
  render() {
    // return /*html*/`
    // <div class="bg-orange-500">
    //     <ul class="flex">
    //     <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
    //     <li><a href="/#/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">About Page</a></li>
    //     <li><a href="/#/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Product Page</a></li>
    //     <li><a href="/#/admin/dashboard" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Dashboard Page</a></li>
    //     <li><a href="/#/signin" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Sing In</a></li>
    //     </ul>
    // </div>
    // `;
    return /*html*/ `
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-10" src="https://zeitzmocaa.museum/wp-content/uploads/2017/09/Gucci-logo.png" alt="">
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
      <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900"> Trang Chủ </a>

        <a href="/#/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> About Page </a>
        <a href="/#/product" class="text-base font-medium text-gray-500 hover:text-gray-900"> Product </a>
        <div class="relative">
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button type="button" class="text-gray-800 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
          <a href="/#/admin/dashboard" class="text-base font-medium text-gray-500 hover:text-gray-900"> Admin </a>
          </button>
        </div>
        </ul>
      </nav>
      ${localStorage.getItem("user") ? `<ul class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <li><a  id="account-email" class="text-base font-medium text-gray-500 hover:text-gray-900"></a></li>
      <li><a  id="logout" class="text-base font-medium text-gray-500 hover:text-gray-900">Logout</a></li>
  </ul>` : `
  <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
  <a href="/signin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
  <a href="/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
</div>
  `}

    </div>
  </div>

  
</div>

`;
  },
  afterRender() {
    const user = JSON.parse(localStorage.getItem("user"));
    const logout = document.querySelector("#logout");

    document.querySelector("#account-email").innerHTML = user.username;
    // logout 
    if(logout){
      logout.addEventListener("click", () => {
        toastr.success("Logout thành công");
        localStorage.removeItem("user");
        reRender(Header, "#header");
      });
    }
  },
};
export default Header;