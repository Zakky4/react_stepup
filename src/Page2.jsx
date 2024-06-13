import { Link } from "react-router-dom/cjs/react-router-dom";

export const Page2 = () => {
    return (
      <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/100">URLパラメーター100</Link>
      <br />
      <Link to="/page2/200">URLパラメーター200</Link>
      <br />
      <Link to="/page2/300">URLパラメーター300</Link>
      </div>
    );
  };