import { useParams, useLocation } from "react-router-dom/cjs/react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    return (
      <div>
        <h1>様々なパラメーター</h1>
        <p>URLパラメーター{id}です</p>
        <p>クエリパラメーターは {query.get("name")}です</p>
      </div>
    );
  };
  