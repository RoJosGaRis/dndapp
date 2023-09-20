import "./App.scss";
import { useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";

import PageButtons from "./Components/Buttons/PageButtons";

import PageConsult from "./Components/Pages/PageConsult/PageConsult";
import PageCreate from "./Components/Pages/PageCreate/PageCreate";
import PageDescribe from "./Components/Pages/PageDescribe/PageDescribe";
import PageRelations from "./Components/Pages/PageRelations/PageRelations";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  /*
  0 -> Consult
  1 -> Create
  2 -> Describe
  3 -> Relations
  */

  return (
    <div className="App">
      <RemoveScrollBar />
      <PageButtons
        className="shown"
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      ></PageButtons>{" "}
      {/*  */}
      <div className="pages-wrapper">
        <PageConsult
          className={`${currentPage === 0 ? "shown" : "hidden"}`}
        ></PageConsult>
        <PageCreate
          className={`${currentPage === 1 ? "shown" : "hidden"}`}
        ></PageCreate>
        <PageDescribe
          className={`${currentPage === 2 ? "shown" : "hidden"}`}
        ></PageDescribe>
        <PageRelations
          className={`${currentPage === 3 ? "shown" : "hidden"}`}
        ></PageRelations>
      </div>
    </div>
  );
}

export default App;
