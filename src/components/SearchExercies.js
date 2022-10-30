import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercies = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  

  useEffect(() => {
    // get data about each body part
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      // once we get the data, spread the data
      setBodyParts(["all", ...bodyPartsData]);
    };

    // fetch the categories as soon as the page loads
    fetchExercisesData();
  }, []); // call at start so use empty array

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      // allows for searching of any of these keywords
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", sx: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercies You <br /> Should Know
      </Typography>

      {/* input field */}
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", sm: "500px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercies"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#5580A1",
            color: "#fff",
            textTransform: "none",
            width: { lg: "170                        px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* holds the cards */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          {/* selected bodyPart */}
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} isBodyParts setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercies;
