import { useEffect, useState, useRef } from 'react';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { getApiFunc } from 'utils';
import { dataType } from 'types';
import { Header, Section } from 'components';
import AllSelectBox from 'components/AllSelectBox';
import Toggle from 'components/Toggle';

const App = (): JSX.Element => {
  const [data, setData] = useState<dataType[] | undefined>([]);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpenMenu(false));

  useEffect(() => {
    (async () => {
      const getData = await getApiFunc();
      setData(getData);
    })();
  }, []);

  return (
    <>
      <Header node={node} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Toggle />
      <AllSelectBox />
      <Section data={data}></Section>
    </>
  );
};

export default App;
