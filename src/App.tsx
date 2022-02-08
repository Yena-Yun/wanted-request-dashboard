import { useEffect, useState } from 'react';
import { getApiFunc } from 'utils/getApi';
import { dataType } from 'types';
import Header from 'components/Header';
import Card from 'components/Card';

const App = (): JSX.Element => {
  const [data, setData] = useState<dataType[] | undefined>([]);

  useEffect(() => {
    (async () => {
      const getData = await getApiFunc();
      setData(getData);
    })();
  }, []);

  return (
    <>
      <Header />
      {data && data.map((el) => <Card key={el.id} item={el} />)}
    </>
  );
};

export default App;
