import { useEffect, useState } from 'react';
import { getApiFunc } from 'utils/getApi';
import { dataType } from 'types';
import './App.css';
import Header from 'components/Header';

const App = (): JSX.Element => {
  const [data, setData] = useState<dataType[] | undefined>([]);

  useEffect(() => {
    const fetch = async () => {
      const getData = await getApiFunc();
      setData(getData);
    };
    fetch();
  }, []);

  return (
    <>
      <Header />
      {data && data.map((el) => <div key={el.id}>{el.title}</div>)}
    </>
  );
};

export default App;
