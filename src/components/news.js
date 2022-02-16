import { getAll } from "../api/post";

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
                    <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </button>

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
      <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="rounded-md object-cover w-full h-64">
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

    <!-- sub-main posts -->
    <div class="w-full md:w-4/7">
      <!-- post 1 -->
      <div class="rounded w-full flex flex-col md:flex-row mb-10">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
        <div class="bg-white rounded px-4">
          <span class="text-green-700 text-sm hidden md:block"> Gadgets </span>
          <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            At every tiled on ye defer do. No attention suspected oh difficult.
          </div>
          <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
            Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
          </p>
        </div>
      </div>

      <!-- post 2 -->
      <div class="rounded w-full flex flex-col md:flex-row mb-10">
        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
        <div class="bg-white rounded px-4">
          <span class="text-green-700 text-sm hidden md:block"> Bitcoin </span>
          <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            Fond his say old meet cold find come whom. The sir park sake bred.
          </div>
          <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
            Integer commodo, sapien ut vulputate viverra, Integer commodo
            Integer commodo, sapien ut vulputate viverra, Integer commodo
          </p>
        </div>
      </div>
      <!-- post 3 -->
      <div class="rounded w-full flex flex-col md:flex-row mb-10">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
        <div class="bg-white rounded px-4">
          <span class="text-green-700 text-sm hidden md:block"> Insights </span>
          <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            Advice me cousin an spring of needed. Tell use paid law ever yet new.
          </div>
          <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
            Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
          </p>
        </div>
      </div>
      <!-- post 4 -->
      <div class="rounded w-full flex flex-col md:flex-row mb-10">
        <img src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
        <div class="bg-white rounded px-4">
          <span class="text-green-700 text-sm hidden md:block"> Cryptocurrency </span>
          <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            Advice me cousin an spring of needed. Tell use paid law ever yet new.
          </div>
          <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
            Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
          </p>
        </div>
      </div>

    </div>

  </div>
  <!-- end featured section -->


  <!-- recent posts -->
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

</main>
</div>  
                    <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                        <div class="border p-3">
                            <a href="/#/news/${post.id}"><img src="${post.img}" alt="" /></a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>

                    
                        
                        `).join("")}
                    </div>
                    
                    `;
      

    },
};
export default News;