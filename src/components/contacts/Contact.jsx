import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import Man2Icon from "@mui/icons-material/Man2";
import Woman2Icon from "@mui/icons-material/Woman2";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { CONTACTS_ROUTE } from "../../app/Routes";
import { Link as RouterLink } from "react-router-dom";

const Contact = ({ firstName, lastName, username, phone, gender }) => {
  return (
    <TableRow>
      <TableCell width={1}>
        {gender === "male" ? (
          <Man2Icon size="sm" />
        ) : gender === "female" ? (
          <Woman2Icon size="sm" />
        ) : (
          <HorizontalRuleIcon size="sm" />
        )}
      </TableCell>
      <TableCell>
        <Typography
          fontWeight="bold"
          to={`${CONTACTS_ROUTE}/${username}`}
          component={RouterLink}
          color="secondary"
          sx={{ textDecoration: "none" }}>
          {firstName} {lastName} <em>{username ? `@${username}` : null}</em>
        </Typography>
        <Typography>{phone}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default Contact;
