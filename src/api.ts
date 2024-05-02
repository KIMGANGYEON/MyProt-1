import axios from "axios";

export async function fetchNews() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const response = await axios.get("/v1/search/news.json", {
    params: {
      query: "김민재",
      display: 10,
      start: 1,
      sort: "sim",
    },
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  });
  return response;
}
