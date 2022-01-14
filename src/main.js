import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/product";
import Header from "./components/header";
import Footer from "./components/footer";
import DetailPage from "./pages/detail";
import AdminProductPage from "./pages/admin/product";
import AdminProductEdit from "./pages/admin/productEdit";
import SignUp from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/signup":()=>{
        print(SignUp.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/products": () => {
        print(AdminProductPage.render());
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    "/admin/dashboard": () => print(DashboardPage.render()),
    "/admin/products": () => print(AdminProductPage.render()),
    "/admin/news": () => print(AdminNews.render()),
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