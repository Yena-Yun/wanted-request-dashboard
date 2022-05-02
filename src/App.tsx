import { useEffect, useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { getApiFunc } from 'utils/getApi';
import { dataType } from 'types';
import Header from 'components/Header/Header';
import Section from 'components/Section/Section';

const App = (): JSX.Element => {
  const [data, setData] = useState<dataType[] | undefined>([]);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const divEl = useRef<HTMLDivElement>(null);

  const checkModalOutside = useCallback(() => {
    setOpenMenu(false);
  }, []);

  useOnClickOutside(divEl, checkModalOutside);

  useEffect(() => {
    (async () => {
      const getData = await getApiFunc();
      setData(getData);
    })();
  }, []);

  return (
    <>
      <Header divEl={divEl} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Section data={data} openMenu={openMenu} />
    </>
  );
};

export default App;
