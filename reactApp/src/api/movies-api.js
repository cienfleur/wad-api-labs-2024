export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=17779b671f6f33a001d5f797fcaaed27&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };