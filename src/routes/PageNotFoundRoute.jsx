import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const PageNotFoundRoute = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="20%">
      <Typography variant="h2">Page not found</Typography>
      <Button variant="contained" size="large" onClick={handleBackClick}>
        Home
      </Button>
    </Box>
  );
};

export default PageNotFoundRoute;
