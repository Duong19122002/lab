import { get } from "../../../api/post1";
    
const DetailNewProduct = {
    async render(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */`
            <div>
                <h1>${data.name}</h1>
                <img src="${data.img}" alt="" />
                <p>${data.desc}</p>
            </div>
        `;
    },
};
export default DetailNewProduct;