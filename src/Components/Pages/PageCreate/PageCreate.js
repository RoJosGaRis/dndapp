import { useState, useEffect, useCallback } from "react";

import styles from "./PageCreate.module.css";

import PageContent from "../PageContent";
import CreatureSkills from "./CreatureSkills";
import CreatureFeatures from "./CreatureFeatures";
import CreatureActions from "./CreatureActions";

const PageCreate = (props) => {
  const [names, setNames] = useState([]);

  const [currentCreatureID, setCurrentCreatureID] = useState("");
  const [currentCreature, setCurrentCreature] = useState([]);

  const onCurrentCreatureChange = async (newCreatureID) => {
    newCreatureID = newCreatureID.target.value;
    setCurrentCreatureID(newCreatureID);
    console.log(newCreatureID);
    try {
      await fetch(`http://localhost:4000/creatures/${newCreatureID}`)
        .then((res) => {
          if (res === undefined) {
            return res;
          }
          return res.json();
        })
        .then(async (d) => {
          setCurrentCreature(d);
          // console.log(d);
          // console.log(currentCreature.abilityScores);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      await fetch("http://localhost:4000/creatures/names")
        .then((res) => {
          if (res === undefined) {
            return res;
          }
          return res.json();
        })
        .then((d) => {
          setNames(d);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PageContent className={`${styles.page_create} ${props.className}`}>
      {/* <PageCreate></PageCreate> */}
      {/* <CreatureSkills></CreatureSkills> */}
      {/* {names.map((creature) => {
        return <p>{creature.name}</p>;
      })} */}
      <CreatureSkills currentCreature={currentCreature}></CreatureSkills>
      <CreatureFeatures
        creature={currentCreature}
        names={names}
        onCurrentCreatureChange={onCurrentCreatureChange}
      ></CreatureFeatures>
      <CreatureActions
        actions={currentCreature === undefined ? " " : currentCreature.actions}
      ></CreatureActions>
    </PageContent>
  );
};

export default PageCreate;
