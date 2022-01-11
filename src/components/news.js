import {data,data2} from "../data";

const News = {
    render() {
        return /* html */`
        <h2 class="uppercase font-bold text-xl my-5 text-slate-900">TIN TỨC HỌC TẬP</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-3">
                        <img src="${post.img}" alt="" />
                        <h3><a href="">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>  
                    `).join("")}
            </div>
            <h2 class="uppercase font-bold text-xl my-5 text-slate-900">HOẠT ĐỘNG SINH VIÊN</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data2.map((post) => `
                    <div class="border p-3">
                        <img src="${post.img}" alt="" />
                        <h3><a href="">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>  
                    `).join("")}
            </div>
        `;
    },
};
export default News;