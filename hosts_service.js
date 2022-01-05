// handle requests

const { get } = require("http");

const url = 'http://localhost:5000/api/posts/';

class PostService {
    // get post
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch.get(url);
                const data = res.data;
                resolve(
                    data.map(posts => ({
                        ...postMessage,
                        createdAt: new Date
                    }))
                )
            } catch(err) {
                reject(err);
            }
        })
    }

    // create post
    static insertPost(text) {
        return fetch.post(url, {
            text
        })
    }

    // delete post
    static deletePost(id) {
        return fetch.delete(`${url}${id}`);
    }
}

export default PostService