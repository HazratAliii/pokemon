import logo from "../public/images/Logo.png";
import Image from "next/image";
import img1 from "../public/images/Image02.png";
import img4 from "../public/images/Image01.png";
import img5 from "../public/images/Image05.png";
import img2 from "../public/images/Image03.png";
import img3 from "../public/images/Image04.png";
import Card from "../components/card";

import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;
const gqlVariables = {
  limit: 10,
  offset: 1,
};
const Index = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="pokemons">
        <div className="texture">
          <div className="logo">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="cards">
            {data.pokemons.results.map((d) => (
              <div className="col">
                <Card pokemon={d} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="infoWrapper">
        <div className="small"></div>
        <div className="big">
          <div className="infoHead">
            <h1> Ash % Pikachu Arrive in</h1>
            <h1>Pokémon Universe</h1>
          </div>
          <div className="footerWrapper">
            <div className="footerLeft">
              <div className="one">
                <p
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    verticalAlign: "middle !important",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  perferendis, tempora ullam eos fugit sequi magni ipsum
                  voluptatibus, deleniti inventore dolores quae magnam saepe
                  mollitia velit aut quod voluptates necessitatibus ea eaque
                  recusandae? Animi autem odio accusantium ad culpa aliquid
                  dignissimos ab distinctio porro? Vero explicabo non quasi
                  officiis quidem asperiores nesciunt, adipisci, in assumenda
                  nam culpa, omnis est cupiditate necessitatibus perspiciatis
                  possimus earum dolore enim temporibus doloremque accusamus!
                  Ipsum iure amet ut quisquam.
                </p>
              </div>
              <div className="two">
                <div className="three">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi, quibusdam neque nesciunt facilis distinctio, esse nisi,
                  velit iusto aspernatur corporis repudiandae expedita ratione.
                  Velit non ratione sint esse maxime officia quas incidunt
                  quaerat libero illo, error tenetur, eaque vel eius delectus
                  nobis vitae nihil mollitia et nesciunt. Natus vero ipsum
                  officiis, ratione veritatis quod laboriosam eum culpa, esse
                  alias exercitationem ea debitis totam omnis ipsam obcaecati
                  iure reiciendis inventore beatae nesciunt earum! Odit
                  molestiae rerum totam!
                </div>
                <div className="four">
                  <Image src={img3} className="five" />
                </div>
              </div>
              <div style={{ width: "68%" }}></div>
              <div className="six">
                <div className="upImg" style={{ height: "50%" }}>
                  <Image src={img1} className="lastTwoImg" />
                </div>
                <div className="upImg" style={{ height: "50%" }}>
                  <Image src={img2} className="lastTwoImg" />
                </div>
              </div>
              <div className="seven">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quod autem maxime ad. Distinctio sapiente earum
                  maiores et quos adipisci reprehenderit modi inventore dolor
                  enim suscipit, odio accusantium autem! Non fuga neque sunt
                  libero in accusantium eos incidunt. Quas officia maiores
                  minima quo beatae, esse perspiciatis. Eos, eveniet sed harum,
                  soluta placeat, officia libero debitis quidem aliquam
                  reiciendis atque est itaque ad aut quia pariatur! Dolorem
                  voluptates, eos ab fugit accusantium assumenda ullam quisquam
                  ad pariatur voluptas deserunt vel, dignissimos libero amet
                  maxime eius molestiae aliquid consequatur est quo cum placeat
                  at nostrum. Illo nisi voluptatibus maiores aperiam iusto
                  recusandae hic, ipsam ea eos in exercitationem quaerat
                  excepturi veniam officiis atque esse corporis, illum corrupti
                  sint quisquam animi culpa doloremque voluptatem? Laudantium
                  commodi qui cupiditate voluptate veniam, accusantium quis
                  provident? Laborum eligendi eaque magnam necessitatibus dicta
                  expedita excepturi earum sit voluptate reprehenderit inventore
                  facilis, amet ipsa non animi neque? Corrupti?
                </p>
              </div>
            </div>
            <div className="footerRight">
              <div className="eight">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas, dignissimos rerum? Maxime unde expedita dicta
                  numquam reiciendis? Illo voluptatem ratione obcaecati! Quis,
                  eveniet iste ipsa ut reprehenderit, quos, tenetur incidunt
                  blanditiis provident nam voluptatem in magnam excepturi
                  placeat impedit fuga tempore consequuntur neque voluptas
                  doloremque itaque qui asperiores saepe totam? Quaerat saepe
                  beatae consectetur! Harum vel voluptatum eaque ipsum, ipsa
                  quis cum incidunt necessitatibus est voluptates, sit quo
                  commodi voluptatibus nesciunt quidem minus? Ratione aperiam
                  laudantium officiis reprehenderit at, amet, nobis quia,
                  maiores totam consequatur aspernatur aut ullam illum
                  necessitatibus?
                </p>
              </div>
              <div className="nine">
                <div className="ten">
                  <div className="upImg" style={{ height: "50%" }}>
                    <Image src={img4} className="eleven" />
                  </div>
                  <div className="upImg" style={{ height: "50%" }}>
                    <Image src={img5} className="twelve" />
                  </div>
                </div>
                <div className="thirteen">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  voluptates dolorum qui ut blanditiis eum voluptate
                  reprehenderit explicabo unde quos, vel cumque vero omnis,
                  quasi libero asperiores illum. Commodi ab delectus quasi hic
                  consequatur dicta voluptas quidem magnam aperiam sit, ad
                  expedita eveniet quo nisi quis fuga libero dignissimos,
                  ratione laboriosam laborum. Maxime iure ducimus nesciunt in,
                  molestiae reprehenderit hic voluptates suscipit. Hic ad eius
                  delectus numquam impedit, nesciunt ut!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small"></div>
      </div>
    </>
  );
};

export default Index;
