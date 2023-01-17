import Link from "next/link";

const Card = ({ pokemon }) => {
  return (
    <>
      <Link
        href={`/about?name=${pokemon.name}&src=${pokemon.image}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="mainShape">
          <div className="secondaryShape">
            <img
              src={pokemon.image}
              alt="pokemon image"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <p
            style={{
              marginLeft: "15px",
              marginTop: "10px",
            }}
          >
            {" "}
            {pokemon.name}{" "}
          </p>
          <div className="abilityWrapper">
            <div className="ability"> fire </div>
            <div className="ability"> water</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
