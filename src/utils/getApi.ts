import axios from 'axios';
import { dataType } from 'types';

export const getApiFunc = async (): Promise<dataType[] | undefined> => {
  try {
    const getData = await axios.get('http://localhost:8000/requests');
    return getData.data;
  } catch (err) {
    alert(err);
  }
};
