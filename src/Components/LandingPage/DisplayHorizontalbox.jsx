import "./DisplayHorizontalbox.css";
import { data } from "../../Modules/DHBoxdata";
function DHBox({ i, Cname }) {
  return (
    <>
      <div className={`c3 ${Cname}`}>
        <div className="DH-inner-container">
          <div className="a3textbox">
            <p className="a3text">{data[i].H1}</p>
            <p>{data[i].desc}.</p>
          </div>
          <div className="DH-image-box">
            <img
              id={`${i == 4 ? "streak-counter" : ""}`}
              src={data[i].img}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
function DHboxAltside({ j, Cname }) {
  return (
    <div className={`c3 ${Cname}`}>
      <div className="DH-inner-container">
        <div
          className="DH-image-box"
          id={`${j == 5 ? "analytics" : `${j == 3 ? "tech-tags" : ""}`}`}
        >
          <img src={data[j].img} alt="" />
        </div>
        <div className="a3textbox">
          <p className="a3text">{data[j].H1}</p>
          <p>Test your knowledge and earn points with daily quizzes.</p>
        </div>
      </div>
    </div>
  );
}

export { DHBox, DHboxAltside };
