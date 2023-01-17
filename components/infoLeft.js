const InfoLeft = ({ name }) => {
  return (
    <>
      <div className="infoLeft" style={{ fontSize: "30px" }}>
        <h1>{name}</h1>
      </div>
      <div style={{ marginTop: "30px", fontSize: "20px" }}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quis
          nemo, cupiditate rerum excepturi consectetur.
        </p>
      </div>
      <div className="infoBox">
        <div className="catLeft">
          <h3>Height</h3>
          <p>2'04"</p>
          <div style={{ marginTop: "60px" }}>
            <h3>Weight</h3>
            <p>15.2 lbs</p>
          </div>
        </div>
        <div className="catRight">
          <h3>category</h3>
          <p>Seed</p>
          <div style={{ marginTop: "60px" }}>
            <h3>Abilities</h3>
            <p>Overgrow</p>
            <p>Blaze</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLeft;
