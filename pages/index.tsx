import type { NextPage } from "next";
import theme from "../theme";

const Home: NextPage = () => {
  return (
    <div>
      <style jsx global>{`
        body {
          background-color: ${theme.color.background};
          color: ${theme.color.forground};
        }
      `}</style>
    </div>
  );
};

export default Home;
