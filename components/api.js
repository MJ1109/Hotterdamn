import axios from 'axios';

export const fetchMuseums = async () => {
  try {
    const response = await axios.get('https://stud.hosted.hr.nl/0987568/api/data.json');
    return response.data.museums;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
