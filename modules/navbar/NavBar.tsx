import React, { FunctionComponent } from "react";
import theme from "../../theme";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const NavBar: FunctionComponent = () => {
  return (
    <div className="navbar">
      <style jsx>{`
        .navbar {
          padding: 20px;
          display: flex;
          background-color: ${theme.color.offset.background.light1};
          justify-content: space-between;
          align-items: center;
        }
        h2 {
          font-weight: bold;
          color: ${theme.color.accent};
          font-size: 2em;
        }
        svg {
          height: 20px;
          width: 20px;
          fill: ${theme.color.foreground};
        }
      `}</style>
      <div className="right">
        <h2>KKIK Krudt</h2>
      </div>
      <div className="left">
        <ShoppingCartIcon className={"basket"} />
      </div>
    </div>
  );
};

export default NavBar;
