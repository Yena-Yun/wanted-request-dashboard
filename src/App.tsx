import { useEffect, useState } from "react";
import { getApiFunc } from "utils/getApi";
import { dataType } from "types";
import "./App.css";
import Header from "components/Header";
import SelectBox from "components/SelectBox";
import AllSelectBox from "components/AllSelectBox";

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
      <AllSelectBox />
    </>
  );
};

export default App;
