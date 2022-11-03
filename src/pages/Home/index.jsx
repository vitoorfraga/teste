import React from "react";

import "@aws-amplify/ui-react/styles.css";

import { ActionCard } from "./../../ui-components";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <h1>Componentes Amplify Studio</h1>

      <div className="amplify-component">
        <h6>Action Card</h6>
        <ActionCard
          overrides={{
            image:
              "https://blog.portalpos.com.br/app/uploads/2021/08/cores.jpg",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
