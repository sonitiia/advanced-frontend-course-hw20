import { Paper } from "@mui/material";
import React from "react";

const StyledPaper = ({ children }) => {
  return (
    <Paper elevation={0} sx={{ mx: "12%", my: "4%" }}>
      {children}
    </Paper>
  );
};

export default StyledPaper;
