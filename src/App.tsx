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
          <h1 css={{ textAlign: "center" }}>Welcome!</h1>
          <p>
            We are truly excited to see you express your talent. Thank you so
            much for taking the time and to allow us a glimpse at your coding
            process.
          </p>
        </header>
        <p>
          With{" "}
          <a
            css={{ color: "#286efa" }}
            href="https://www.figma.com/file/T2gUX5ED55cN2YPXvJQ4zM/DSGN-86---H%C3%B6nnun-fyrir-atvinnuvi%C3%B0tal?node-id=30%3A5"
            target="_blank"
            rel="noopener noreferrer"
          >
            this design
          </a>{" "}
          as your guide, implement an interface that satisfies the following:
        </p>
        <ol
          css={{
            li: { margin: "0.5em" },
            ul: { listStyleType: "disc" },
          }}
        >
          <li>
            A view that implies that a list is empty, along with a button that
            provides users the ability to add an item to the list.
          </li>
          <li>Adding an item to the list is possible.</li>

          <ul>
            <li>If the number of items in the list surpasses 10;</li>

            <ul>
              <li>The list is replaced with an error interface.</li>
              <li>A button allows the user to clear the list.</li>
            </ul>
          </ul>

          <li>List items are clickable</li>
          <ul>
            <li>
              When clicking an item, a modal appears displaying further info
              regarding the item and allows the user to edit it.
            </li>
          </ul>
          <li>List items can be deleted.</li>
        </ol>
        <p>
          Please open <code>src/Solution.tsx</code> and use it as a starting
          point for your code.
        </p>
      </div>
    </div>
  );
}

export default App;
