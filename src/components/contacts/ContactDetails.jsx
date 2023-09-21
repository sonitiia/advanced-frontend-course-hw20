import React from "react";
import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Contacts from "./Contacts";

const ContactDetails = () => {
  const { username } = useParams();

  const contact = Contacts.find((c) => c.username === username);

  return (
    <Stack alignItems="center" gap={4} my={8}>
      <Typography variant="h5">
        {contact.firstName} {contact.lastName}
      </Typography>
      <Typography>Gender: {contact.gender}</Typography>
      <Typography>Phone: {contact.phone}</Typography>
      <Typography>
        Description: {contact.description || "There is no description"}
      </Typography>
      <Typography>Chat: {contact.chat || "There is no chat"}</Typography>
    </Stack>
  );
};

export default ContactDetails;
