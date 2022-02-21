import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminAddPost from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import DetailProduct from "./pages/products/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ProductsPage from "./pages/products";
import CartPage from "./pages/cart";
import AdminListProduct from "./pages/admin/news/listproduct";
import NewProduct from "./components/newproduct";
import DetailNewProduct from "./pages/admin/news/detailnewproduct";
import AdminAddProduct from "./pages/admin/news/addproduct"
import Products from "./components/products";
import CheckOut from "./pages/checkout";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => { }, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        // nếu userId === 1 thì tôi mới render
        if (userId === 1) {
            done();
        } else {
            // ngược thì lại redirect về trang chủ
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductsPage),
    "/signin": () => print(Signin),
    "/signup": () => print(Signup),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/products/:id": ({ data }) => print(DetailProduct, data.id),
    "/cart": () => print(CartPage),
    "/admin/products": () => print(AdminListProduct),
    "/new/product": () => print(NewProduct),
    "/new/product/:id": ({ data }) => print(DetailNewProduct, data.id),
    "/admin/news/product": () => print(AdminAddProduct),
    "/products": () => print(Products),
    "/checkout":()=> print(CheckOut)
}); 

router.resolve();