import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AxiosConfig from "../AxiosConfig/AxiosConfig";
import { verifyToken } from "../utils";
import jwt_decode from "jwt-decode";

// import verifyToken from "services/verifyToken";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      checkToken();
    }, []);

    const checkToken = async () => {
      const accessToken = localStorage.getItem("expert_token");
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/signin");
      } else {
        // we call the api that verifies the token.

        // const data = await verifyToken(accessToken);
        // if token was verified we set the state.
        // console.log("token", data);

        const isLoggedIn = () => {
          const token = localStorage.getItem("expert_token");
          if (!token) {
            return false;
          }

          const decodedToken = jwt_decode(token);
          const currentTime = new Date().getTime() / 1000;

          return decodedToken.exp > currentTime;
        };

        if (isLoggedIn()) {
          setVerified(true);
        } else {
          // If the token was fraud we first remove Consultancy  from localStorage and then redirect to "/"
          localStorage.removeItem("expert_token");
          Router.replace("/signin");
        }
      }
    };

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
