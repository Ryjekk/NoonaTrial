/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";

import React from "react";
import logo from "./logo.svg";

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function App() {
  return (
    <div
      css={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifySelf: "center",
        background: "#302b2b",
        color: "white",
        fontSize: "22px",
        padding: "2em",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <div css={{ maxWidth: "30em" }}>
        <header
          css={{
            display: "flex",
            flexDirection: "column",

            color: "white",
            textAlign: "left",
          }}
        >
          <img
            src={logo}
            css={{
              height: "200px",
              pointerEvents: "none",
              animation: `${logoSpin} infinite 20s linear`,
            }}
            alt="logo"
          />
          <h1 css={{ textAlign: "center" }}>Velkomin!</h1>
          <p>
            Við erum ekkert eðlilega spennt fyrir því að sjá þig láta ljós þitt
            skína. Takk kærlega fyrir að gefa þér tíma og leyfa okkur að fá
            innsýn í hvernig þú skrifar kóða.
          </p>
        </header>
        <p>
          Með{" "}
          <a
            css={{ color: "#286efa" }}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            hönnun til hliðsjónar
          </a>
          , útfærðu viðmót tengt lista sem uppfyllir eftirfarandi:
        </p>
        <ol
          css={{
            li: { margin: "0.5em" },
            ul: { listStyleType: "disc" },
          }}
        >
          <li>
            Viðmót sem gefur til kynna að listi sé tómur, ásamt takka sem leyfir
            notanda að bæta við hlut í listann.
          </li>
          <li>Hægt að bæta við nýjum hlut í listann.</li>

          <ul>
            <li>Ef heildarfjöldi hluta fer yfir 10, þá;</li>

            <ul>
              <li>Birtist villuviðmót í staðinn fyrir listann.</li>
              <li>
                Birtist takki sem leyfir notanda að eyða öllum hlutum í
                listanum.
              </li>
            </ul>
          </ul>

          <li>Hægt að smella á hlutinn.</li>
          <ul>
            <li>
              Við það opnast side panel þar sem hægt er að sjá nánari
              upplýsingar um hlutinn og breyta eigindum hlutarins.
            </li>
          </ul>
          <li>Hægt að eyða hlut úr listanum.</li>
        </ol>
        <p>
          Þú mátt gjarnan opna <code>src/Solution.tsx</code> og skrifa lausnina
          þína þar.
        </p>
      </div>
    </div>
  );
}

export default App;
