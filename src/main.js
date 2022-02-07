import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/homepage";
import DetailPage from "./pages/detail";
import AdminProductPage from "./pages/admin/product";
import AdminProductEdit from "./pages/admin/productEdit";
import SignUp from "./pages/signup";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news/index";
import AdminNewsAdd from "./pages/admin/news/add";
const router = new Navigo("/", { linksSelector: "a",hash: true });
const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender();
};
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/signin": () => print(SignUp),
    "/product/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/products": () => { print(AdminProductPage); },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    "/admin/dashboard": () => print(Dashboard),
    "/admin/products": () => print(AdminProductPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminNewsAdd),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),

});
router.resolve();
