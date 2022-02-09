import axios from 'axios';
import { dataType } from 'types';

const getApiFunc = async (): Promise<dataType[] | undefined> => {
  try {
    const getData = await axios.get(
      'https://ateam-ventrues-mission.herokuapp.com/requests'
    );
    return getData.data;
  } catch (err) {
    alert(err);
  }
};

export default getApiFunc;
