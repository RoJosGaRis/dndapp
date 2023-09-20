import React, { useCallback, useEffect, useState } from "react";
import { BaseDnDAPIUrl } from "../../../Utils/Constants";
import { RemoveScrollBar } from "react-remove-scroll-bar";

import styles from "./PageConsult.module.css";

import PageContent from "../PageContent";
import ResultsList from "./ResultsList";
import ResultsDisplay from "./ResultsDisplay";

const PageConsult = (props) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState([BaseDnDAPIUrl]);
  const [searchResults, setSearchResults] = useState("");

  const addToFilter = (filter) => {
    setUrl((prev) => [...prev, filter]);
  };

  const removeFromFilter = () => {
    setUrl((prev) => {
      const newUrl = [...prev];
      newUrl.splice(-1, 1);
      if (newUrl.length === 1) {
        setSearchResults("");
      }

      return newUrl;
    });
  };

  const fetchInfo = useCallback(async () => {
    let completeURL = "";
    url.forEach((u) => {
      completeURL = completeURL + u + "/";
    });
    console.log(completeURL);

    return fetch(completeURL)
      .then((res) => res.json())
      .then((d) => {
        if (url.length === 3) {
          removeFromFilter();
          setSearchResults(d);
          console.log(d);
        } else {
          setData(d);
          // setSearchResults("");
          console.log(d);
        }
      });
  }, [url]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <PageContent className={`${styles.pageConsult} ${props.className}`}>
      <RemoveScrollBar />

      <ResultsList
        className={styles.resultsList}
        data={
          Object.keys(data)[1] === "results" ? data.results : Object.keys(data)
        }
        addToFilter={addToFilter}
        removeFromFilter={removeFromFilter}
        isResults={Object.keys(data)[1] === "results"}
      />

      <ResultsDisplay
        results={searchResults}
        type={url[url.length - 1]}
      ></ResultsDisplay>
    </PageContent>
  );
};

export default PageConsult;
