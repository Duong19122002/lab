import { getAll } from "../api/post";
import NewProduct from "../components/newproduct"
import Product from "../components/products"
const News = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <div class="max-w-screen-lg mx-auto">
<!-- header -->

<!-- header ends here -->
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

<div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
        
                <div class="flex items-center justify-end w-full">
                   

                    <div class="flex sm:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
          
            <div class="relative mt-6 max-w-lg mx-auto">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>

                <input class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search">
            </div>
        </div>
<main class="mt-12">
  <!-- featured section -->
  <div class="grid gap-4 grid-cols-2 grid-rows-1">
    <!-- main post -->
    <div class="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
      <img src="https://brand.assets.reebok.com/f_auto,q_auto,fl_lossy/capi/reebok_enUS/natgeo-hero_274-760189.jpg  " class="rounded-md object-cover w-full h-64">
      <span class="text-green-700 text-sm hidden md:block mt-4"> Technology </span>
      <h1 class="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
        Ignorant branched humanity led now marianne too.
      </h1>
      <p class="text-gray-600 mb-4">
        Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
        decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
        itself.
        Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
      </p>
      <a href="./blog.html" class="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
        Read more
      </a>
    </div>

      ${await NewProduct.render()}
      

  </div>

  </div>
  <!-- end featured section -->


  <!-- recent posts -->


</main>
<div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
    <h2 class="font-bold text-3xl">Latest news</h2>
    <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
      View all
    </a>
  </div>
${await Product.render()}   
<div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
    <h2 class="font-bold text-3xl">Latest news</h2>
    <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
      View all
    </a>
  </div>


  <div class="block space-x-0 lg:flex lg:space-x-6">
  ${data.map((post) => `
    <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0 ">
    <a href="/#/news/${post.id}"> <img src="${post.img}" class="rounded h-96 w-96" alt="technology" /></a>

      <div class="p-4 pl-0">
        <h2 class="font-bold text-2xl text-gray-800"><a href="/news/${post.id}"class="font-bold text-2xl text-gray-800">${post.title}</a></h2>
        <p class="text-gray-700 mt-2">
        ${post.desc}
        </p>

        <a href="/#/news/${post.id}" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
      </div>
    </div>
    `).join("")}
  </div>

  <!-- end recent posts --> 

  <!-- subscribe -->
             
              <div class="bg-gray-200">
    <section class="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
    <article class="flex-col justify-center inline-flex self-stretch  p-6">
      <h2 class="uppercase font-semibold text-xl">Design</h2>
      <strong class="text-lg pb-2 font-normal font-sans sm:text-2xl">Our 30 Year Journey</strong>
      <p class="text-sm pb-4">Join us as we revisit our roots, tracing the path from bright idea to industry disruptors with a plan to fight climate change while creating beautiful things. </p>
      <button class="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white">Join us</button>
    </article>
    <figure>
    <img 
    src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
    alt="Banner" looding="lazy" />
    </figure>
    </section>
  </div>
            </div>  

            <div class="rounded flex md:shadow mt-12">
            <img src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="w-0 md:w-1/4 object-cover rounded-l" />
            <div class="px-4 py-2">
              <h3 class="text-3xl text-gray-800 font-bold">Subscribe to newsletter</h3>
              <p class="text-xl text-gray-700">We sent latest news and posts once in every week, fresh from the oven</p>
              <form class="mt-4 mb-10">
                <input type="email" class="rounded bg-gray-100 px-4 py-2 border focus:border-green-400" placeholder="john@tech.com"/>
                <button class="px-4 py-2 rounded bg-green-800 text-gray-100">
                  Subscribe
                  <i class='bx bx-right-arrow-alt' ></i>
                </button>
                <p class="text-green-900 opacity-50 text-sm mt-1">No spam. We promise</p>
              </form>
            </div>
          </div>
                </div>
                
                    
                    `;
      

    },
};
export default News;