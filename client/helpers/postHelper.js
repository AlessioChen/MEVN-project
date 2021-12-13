import axios from 'axios';

let url = 'https://menvproject.herokuapp.com/blog/posts';

async function getPosts() {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

export { getPosts }