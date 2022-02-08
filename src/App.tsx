import { useEffect, useState } from "react";
import { getApiFunc } from "utils";
import { dataType } from "types";
import AllSelectBox from "components/AllSelectBox";
import { Header, Section } from "components";

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
      <AllSelectBox />
      <Section data={data}></Section>
    </>
  );
};

export default App;
