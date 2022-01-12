import {data} from "../../data";
const AdminProductList = {
    render() {
        return /*html*/`
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STT
                    </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ẢNH
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TÊN BÀI VIẾT
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          NỘI DUNG BÀI VIẾT
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CHỈNH SỬA
                        </th>
                      </tr>
                    </thead>
                    ${data.map((post)=> /*html*/`
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${post.id}
                    </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900"><a href="/product/${post.id}">${post.title}</div>
                          <div class="text-sm text-gray-500"></div>
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${post.desc}
                        </td>
                        <td class="px-8 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="admin/product/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
                        </td>
                      </tr>
            
                      <!-- More people... -->
                    </tbody>
                    `
                        
                        ).join("")}
                  </table>
                </div>
              </div>
            </div>
            </div>

    `
    },
};
export default AdminProductList;