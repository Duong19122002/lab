
const News = {
    render() {
        return fetch ("http://localhost:3001/post")
            .then((response) => response.json())
            .then((data) => {
                return`
        <h2 class="uppercase font-bold text-xl my-5 text-slate-900">TIN TỨC HỌC TẬP</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-3">
                        <img src="${post.img}" alt="" />
                        <h3 class="my-3 font-semibold text-orange-500 text-lg"><a href="/product/${post.id}">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>  
                    `).join("")}
            </div>

        `
            });
        /* html */;
    },
};
export default News;