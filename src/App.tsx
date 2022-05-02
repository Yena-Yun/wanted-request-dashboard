import { useEffect, useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { getApiFunc } from 'utils';
import { dataType } from 'types';
import { Header, Section } from 'components';

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
      <Section data={data} openMenu={openMenu}></Section>
    </>
  );
};

export default App;
