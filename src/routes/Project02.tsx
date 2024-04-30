import axios from "axios";
import { useEffect, useState } from "react";

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
function Project02() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch(
          `https://sgisapi.kostat.go.kr/OpenAPI3/stats/population.json?year=2020&low_search=0&adm_cd=11&accessToken=93747545-5315-4ab1-a8f2-510f89a1384a
          `
        )
      ).json();
      console.log(response);
    })();
  }, []);

  return <h1>hello</h1>;
}
export default Project02;
