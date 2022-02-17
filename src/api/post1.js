
import instance from "./config";

export const getAll = () => {
    const url = `/post1`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/post1/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/post1`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/post1/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/post1/${post.id}`;
    return instance.put(url, post);
}