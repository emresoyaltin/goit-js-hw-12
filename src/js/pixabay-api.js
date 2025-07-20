import axios from "axios";

export async function getImagesByQuery(query, page) {
    const API_KEY = "50859517-961673cab883b3cd43a6fc51d";
    const perPage = 15;
    try {
        const result = await axios.get("https://pixabay.com/api/", {
            params: {
                key: API_KEY,
                q: query,
                page: `${page}`,
                per_page: `${perPage}`,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true
            }
        });
        return result.data;
    } catch (error) {
        console.log(error.message);
    }
}