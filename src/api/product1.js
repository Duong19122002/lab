import instance from "./config";

export const getAll = () => {
    const url = `/product1`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/product1/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/product1`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/product1/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/product1  /${post.id}`;
    return instance.put(url, post);
};