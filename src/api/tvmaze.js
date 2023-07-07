const BASE_URL = 'https://api.tvmaze.com';
const apiGet = async querystring => {
  const response = await fetch(`${BASE_URL}${querystring}`);
  const body = await response.json();
  return body;
};
export const searchforshow = query => apiGet(`/search/shows?q=${query}`);
export const searchforpeople = query => apiGet(`/search/people?q=${query}`);
