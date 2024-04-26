import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Main</title>
      </Helmet>
      <h1 className="h1">hello</h1>
      <Link to={"ProtShow"}>
        <button>click</button>
      </Link>
    </div>
  );
}
export default Home;
