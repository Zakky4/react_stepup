export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Sytled JSX -</p>
        <button className="button">FIGHT!!!</button>
      </div>
      <style jsx="true">
        {`
          .container {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;
            padding: 10px;
            border: 2px solid blue;
            border-radius: 50px;
          }

          .title {
            color: #78909c;
            font-size: 24px;
          }

          .button {
            background-color: #b2dfdb;
            color: black;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            &:hover {
              background-color: #46cdcf;
              color: #fff;
              cursor: pointer;
            }
          }
        `}
      </style>
    </>
  );
};
