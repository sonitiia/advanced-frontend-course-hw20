import React from "react";
import ContactDetails from "../components/contacts/ContactDetails";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const ContactDetailsRoute = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/contacts");
  };

  return (
    <>
      <ContactDetails />
      <Button
        variant="outlined"
        color="primary"
        sx={{ alignSelf: "center" }}
        onClick={handleBackClick}>
        Back to contacts list
      </Button>
    </>
  );
};

export default ContactDetailsRoute;
