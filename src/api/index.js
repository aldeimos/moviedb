const API_KEY = '52f110ad1b13b1b6c28850d706a5eb73';
export const getMovie = async () => {
    return fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`)
        .then(response => response.json());
};



