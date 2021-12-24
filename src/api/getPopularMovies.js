import axiosInstance from '../configs/axiosInstance';

const getPopularMovies = async (page = 1) => {
  const result = [null, null];
  try {
    const res = await axiosInstance.get(`/movie/popular?page=${page}`);
    result[0] = res.data;
  } catch (error) {
    result[1] = error;
  }

  return result;
};

export default getPopularMovies;
