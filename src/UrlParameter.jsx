import { useParams } from "react-router-dom/cjs/react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    return (
      <div>
        <h1>Urlパラメーター{id}です</h1>
      </div>
    );
  };
  