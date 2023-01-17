import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import logo from "../public/images/Logo.png";
import Image from "next/image";
import InfoLeft from "../components/infoLeft";
import InfoRight from "@/components/infoRight";

const About = () => {
  const router = useRouter();
  const { name, src } = router.query;

  return (
    <>
      <div className="infoWrapper">
        <div className="small"></div>
        <div className="big">
          <div
            className="infoHead"
            style={{
              marginTop: "50px",
              backgroundImage: "none",
            }}
          >
            <div
              className="logo"
              style={{ margin: "0 auto", marginTop: "50px", height: "100px" }}
            >
              <Image src={logo} alt="Logo" />
            </div>
          </div>

          <div className="pokemonInfoWrapper">
            <div className="pileft">
              <InfoLeft name={name} />
            </div>
            <div className="pimid">
              <img src={src} alt="" />
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="backBtn">back to Homepage</div>
              </Link>
            </div>
            <div className="piright">
              <InfoRight />
            </div>
            <div className="backBtn2">
              <Link href="/">Back to Homepage</Link>
            </div>
          </div>
        </div>
        <div className="small"></div>
      </div>
    </>
  );
};

export default About;
