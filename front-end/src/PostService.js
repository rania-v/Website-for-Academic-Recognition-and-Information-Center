import axios from 'axios';
const url = 'http://localhost:5000/api/posts/';

class PostService {
    // Get Post
    static async getPosts() {
        const res = await axios.get(url);
        // return new Promise(async (resolve, reject) => {
            try {
                
                const data = res.data;
                // resolve(
                    return data.map(post => ({
                            ...post,
                            createdAt: new Date(post.createdAt)
                        }))
                    // return data.map(post => ({
                    //     ...post,
                    //     createdAt: new Date(post.createdAt)
                    // }))
                // );
            }catch(err) {
                return err;
                // reject(err);
            }
        // } );
    }

    // Create Post
    static insertPost(text) {
        return fetch.post(url, {
            text
        });
    }

    // Delete Post
    static deletePost(id) {
        return fetch.delete(`${url}${id}`);
    }
}

export default PostService;