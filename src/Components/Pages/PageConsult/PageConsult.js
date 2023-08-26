import React, { useCallback, useEffect, useState } from "react";
import { BaseDnDAPIUrl } from "../../../Utils/Constants";
import { RemoveScrollBar } from "react-remove-scroll-bar";

import "./PageConsult.css";

import PageContent from "../PageContent";
import ResultsList from "./ResultsList";

const PageConsult = (props) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState([BaseDnDAPIUrl]);

  const addToFilter = (filter) => {
    setUrl((prev) => [...prev, filter]);
  };

  const removeFromFilter = () => {
    setUrl((prev) => {
      const newUrl = [...prev];
      newUrl.splice(-1, 1);
      return newUrl;
    });
  };

  const fetchInfo = useCallback(() => {
    let completeURL = "";
    url.forEach((u) => {
      completeURL = completeURL + u + "/";
    });
    console.log(completeURL);

    return fetch(completeURL)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log(d);
      });
  }, [url]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <PageContent className={`page-consult ${props.className}`}>
      <RemoveScrollBar />

      <ResultsList
        data={
          Object.keys(data)[1] === "results" ? data.results : Object.keys(data)
        }
        addToFilter={addToFilter}
        isResults={Object.keys(data)[1] === "results"}
      />
      <button
        type="button"
        className={`filter-button back-button ${
          url.length === 1 ? "hidden" : ""
        }`}
        onClick={removeFromFilter}
      >
        Back
      </button>
    </PageContent>
  );
};

export default PageConsult;
