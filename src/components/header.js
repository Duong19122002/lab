import {data3} from "../data";
const Header = {
    render() {
        return /* html */`
        <div class="bg-slate-900 py-4">
        ${data3.map((post) => `
        <img src="${post.img}" alt="" class="mx-auto">
                    `).join("")}
      </div>
        <div class="bg-orange-500">
            <ul class="flex">
            <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
            <li><a href="/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">About Page</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Product Page</a></li>
            </ul>
        </div>
        <div class="header-bottom__search p-3">
          <form action="">
            <input type="text" class="w-48" required>
            <button class="bg-slate-900 w-24 text-white border-solid border border-white">TÌM KIẾM</button>
          </form>
        </div>
        `;
    },
};
export default Header; 