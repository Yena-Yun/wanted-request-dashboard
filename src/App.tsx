import { useEffect, useState } from 'react';
import { getApiFunc } from 'utils/getApi';
import { dataType } from 'types';
import './App.css';

const App = (): JSX.Element => {
  const [data, setData] = useState<dataType[] | undefined>([]);

  useEffect(() => {
    const fetch = async () => {
      const getData = await getApiFunc();
      setData(getData);
    };
    fetch();
  }, []);

  return <>{data && data.map((el) => <div key={el.id}>{el.title}</div>)}</>;
};

export default App;
