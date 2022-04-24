import axios from 'axios';

const baseUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=${process.env.REACT_APP_FLICKR_KEY}&content_type=1&is_getty=1&`;

const http = {
  get(text: string, page: number) {
    return axios.get(baseUrl, {
      params: {
        text,
        page,
      },
    });
  },
};
export default http;
