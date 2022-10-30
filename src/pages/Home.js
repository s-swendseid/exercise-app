import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercies from "../components/SearchExercies";

const Home = () => {
  // set in home because these will be used throughout the application
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]); // add to state to later display

  // console.log(exercises)
  // console.log(exercises.name)

  return (
    <Box>
      <HeroBanner />
      <SearchExercies
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
