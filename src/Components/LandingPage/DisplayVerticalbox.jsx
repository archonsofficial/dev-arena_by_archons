import "./DisplayVerticalbox.css";
import { data } from "../../Modules/DVBoxdata";
function DVBox({ i, Cname }) {
  return (
    <>
      <div className={`c4 ${Cname}`}>
        <div className="DV-inner-container">
          <div className="app4img-container">
            {" "}
            <img
              id={`${i == 0 ? "maketeam" : "weekly-challenges"}`}
              src={data[i].img}
            />
          </div>
          <div className="a4textbox">
            <p>{data[i].header}</p>
            <p>{data[i].desc}</p>
          </div>
        </div>
      </div>
      <div className={`c4 ${Cname}`}>
        <div className="DV-inner-container">
          <div className="app4img-container">
            {" "}
            <img id={`${++i == 1 ? "maketeam" : "league"}`} src={data[i].img} />
          </div>
          <div className="a4textbox">
            <p>{data[i].header}</p>
            <p>{data[i].desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DVBox;
