import React from "react";

const InfoRight = () => {
  return (
    <>
      <div className="rightWrapper">
        <div className="type">
          <h3>Type</h3>
          <div className="btnsWrap">
            <div
              className="btns"
              style={{ marginRight: "20px", backgroundColor: "orange" }}
            >
              Grass
            </div>
            <div
              className="btns"
              style={{ marginRight: "20px", backgroundColor: "#E281E2" }}
            >
              Poison
            </div>
          </div>
        </div>
        <div className="weakness" style={{ marginTop: "40px" }}>
          <h3>Weaknesses</h3>
          <div className="btnsWrap">
            <div
              className="btns"
              style={{ marginRight: "20px", backgroundColor: "orange" }}
            >
              Fire
            </div>
            <div
              className="btns"
              style={{ marginRight: "20px", backgroundColor: "blue" }}
            >
              Physic
            </div>
            <div
              className="btns"
              style={{ marginRight: "20px", backgroundColor: "orange" }}
            >
              Flying
            </div>
            <div
              className="btns"
              style={{ marginRight: "20px", backgroundColor: "green" }}
            >
              Ice
            </div>
          </div>
        </div>
        <div className="stats"></div>
      </div>
    </>
  );
};

export default InfoRight;
