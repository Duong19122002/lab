import AdminProductList from "../../components/admin/products";
const AdminProductPage = {
  render() {
    return `
     <div>
     <h1>Quản Lý Product</h1>
     ${AdminProductList.render()}
     </div>
     `;
  },
};
export default AdminProductPage;