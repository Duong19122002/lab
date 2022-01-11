import { data,data2 } from "../data";
const DetailPage = {
    render(id) {
        console.log("id in detail page", id);
        const result = data.find((post) => post.id === id);
        return /*html*/ `
        <div class="border">
        <h1> ${result.title}</h1>
        <img src="${result.img}" atl=""/>
        <p>${result.desc} </p>
        </div>
        `;
    },
};
export default DetailPage;