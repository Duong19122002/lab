
import { getAll } from "../api/post1";
const   NewProduct = {

    async render() {
        const { data } = await getAll();
        return `
${data.map((post) =>`
                <div class="">
                <div class="rounded w-full flex flex-col md:flex-row mb-10">
                 <a href="/#/new/product/${post.id}"> <img src="${post.img}" class=" " alt="technology" /></a>
                    <div class="bg-white rounded px-4">
                    <h3 class="text-gray-800 font-bold mt-2 mb-2 leading-tight"> <a href="/#/new/product/${post.id}">${post.name}</a></h3>
                    <div class="text-gray-600 mb-4">
                       ${post.desc}
                   
                </div>
                </div>
                </div>
    `).join("")}
`;
    },
};
export default NewProduct;