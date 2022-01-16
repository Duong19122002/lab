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

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
    if(content.afterRender) content.afterRender();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/signup":()=> print(SignUp),
    "/product/:id": ({ data }) =>print(DetailPage,data.id),
    "/admin/products": () => {
        print(AdminProductPage.render());
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    "/admin/dashboard": () => print(Dashboard),
    "/admin/products": () => print(AdminProductPage.render()),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminNewsAdd.render()),

});

    router.resolve();

// Cach 2
// router.on("/", () => {
//     console.log("Home Page");
// });
// router.on("/about", () => {
//     console.log("About Page");
// });

// class TuongPhep {
//   constructor(name, congVatLy, congPhep) {
//     this.tenTuong = name;
//     this.congVatLyTuong = congVatLy;
//     this.congPhepTuong = congPhep;
//   };
//   showInfo() {
//     console.log(`
//       Ten Tuong la: ${this.tenTuong}
//       Cong vat ly Tuong la: ${this.congVatLyTuong}
//       Cong phep Tuong la: ${this.congPhepTuong}
//     `)
//   }
// }

// const tuong1 = new TuongPhep("veera", 170, 0);
// const tuong2 = new TuongPhep("krixi", 153, 0);
// tuong1.showInfo();
// console.log(tuong2.showInfo());