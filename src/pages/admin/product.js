import AdminProductList from "../../components/admin/products";
const AdminProductPage = {
  render() {
    return `
     <div>
     <div class="text-center"> 
  <h1>QUẢN LÝ PRODUCT</h1>
     </div>
     ${AdminProductList.render()}
     </div>
     `;
  },
};
export default AdminProductPage;