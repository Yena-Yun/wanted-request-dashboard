import axios from 'axios';
import { dataType } from 'types';

const BASE_URL = 'https://ateam-ventrues-mission.herokuapp.com';

export const getApiFunc = async (): Promise<dataType[] | undefined> => {
  try {
    const getData = await axios.get(`${BASE_URL}/requests`);
    return getData.data;
  } catch (err) {
    alert(err);
  }
};
