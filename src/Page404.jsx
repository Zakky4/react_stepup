import { Link } from "react-router-dom/cjs/react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりませんでした</h1>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
};
