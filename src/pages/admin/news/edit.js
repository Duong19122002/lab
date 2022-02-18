import { add ,get, update } from "../../../api/post";
import AdminNav from "../../../components/AdminNav";
import axios from "axios";

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                               Edit ${data.title}
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <form id="form-edit">
                        

                                    <div class="heading text-center font-bold text-2xl m-5 text-gray-800">EDIT POST</div>
                                    <style>
                                    body {background:white !important;}
                                    </style>
                                    <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                                        <input id="title-post" value="${data.title}" class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text">
                                        <div><input id="img-post" type="file" class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" /></div>
                                        <div><img width="200" src="${data.img}" id="img-preview"/></div>
                                        <textarea  id="desc-post"  class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here">${data.desc}</textarea>
                                        
                                        <!-- icons -->
                                        <div class="icons flex text-gray-500 m-2">
                                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                                        <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                                        </div>
                                        <!-- buttons -->
                                        <div class="buttons flex">
                                        <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                                        <button  class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Update New</button>
                                        </div>
                                    </div>

                        </form>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>
        
        `;
    },
    afterRender(id) {
        const formAdd = document.querySelector("#form-edit");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        let imgLink = "";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/nguyen-ngoc-duong/image/upload";
        const CLOUDINARY_PRESET = "u64dswql";
    
        // handle sự kiện change để xem ảnh trên local
        imgPost.addEventListener('change', function(e){
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
    
        formAdd.addEventListener("submit", async function (e) {
            e.preventDefault(); 
            const file = imgPost.files[0];
            if(file){
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
        
                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                imgLink = data.url
            }
    
            
            // call api thêm bài viết
            update({
                id: id,
                title: document.querySelector("#title-post").value,
                img: imgLink ? imgLink : imgPreview.src,
                desc: document.querySelector("#desc-post").value,
            });
        });
      },
    };
export default AdminEditPost;