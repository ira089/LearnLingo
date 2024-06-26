import axios from 'axios';
const BASE_URL = 'https://65c63eb3e5b94dfca2e142a3.mockapi.io/api/v1';

export const fetchTeacherAll = async () => {
  const { data } = await axios.get(`${BASE_URL}/adverts`);
  return data;
};