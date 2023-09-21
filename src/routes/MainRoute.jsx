import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { POSTS_ROUTE } from "../app/Routes";

const MainRoute = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      gap={8}
      height="100vh"
      p="30%"
      textAlign="center"
      sx={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4090350/pexels-photo-4090350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
      <Typography variant="p" color="white">
        Road trips are a popular and enjoyable way to travel, allowing you to
        explore new places at your own pace while enjoying the journey as much
        as the destination.
      </Typography>
      <Button
        variant="outlined"
        size="large"
        to={POSTS_ROUTE}
        component={RouterLink}>
        Explore more
      </Button>
    </Box>
  );
};

export default MainRoute;
