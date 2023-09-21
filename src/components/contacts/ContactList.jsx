import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import Contacts from "./Contacts";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";

const ContactList = () => {
  const [contacts, setContacts] = useState(Contacts);
  const [inputValue, setInputValue] = useState("");
  const [checkboxMaleValue, setCheckboxMaleValue] = useState(true);
  const [checkboxFemaleValue, setCheckboxFemaleValue] = useState(true);
  const [checkboxNotPointedValue, setCheckboxNotPointedValue] = useState(true);

  const handleInputValueChange = (e) => {
    const searchName = e.target.value.toLowerCase();
    setInputValue(searchName);

    const filtered = Contacts.filter(
      (contact) =>
        contact.lastName.toLowerCase().includes(searchName) ||
        contact.firstName.toLowerCase().includes(searchName) ||
        contact.phone.includes(searchName),
    );

    applyGenderFilter(filtered);
  };

  const handleCheckboxMaleValueChange = () => {
    setCheckboxMaleValue(!checkboxMaleValue);
  };

  const handleCheckboxFemaleValueChange = () => {
    setCheckboxFemaleValue(!checkboxFemaleValue);
  };

  const handleCheckboxNotPointedValueChange = () => {
    setCheckboxNotPointedValue(!checkboxNotPointedValue);
  };

  const applyGenderFilter = (data) => {
    const filtered = data.filter((contact) => {
      if (!checkboxMaleValue && contact.gender === "male") {
        return false;
      } else if (!checkboxFemaleValue && contact.gender === "female") {
        return false;
      } else if (!checkboxNotPointedValue && !contact.gender) {
        return false;
      }
      return true;
    });

    setContacts(filtered);
  };

  useEffect(() => {
    applyGenderFilter(Contacts);
    // eslint-disable-next-line
  }, [checkboxMaleValue, checkboxFemaleValue, checkboxNotPointedValue]);

  return (
    <Stack gap={4} m={4}>
      <Typography variant="h5">Contacts</Typography>

      <OutlinedInput
        type="text"
        placeholder="Search contacts"
        value={inputValue}
        onChange={handleInputValueChange}
      />

      <FormGroup sx={{ flexDirection: "row" }}>
        <FormControlLabel
          control={
            <Checkbox
              value={checkboxMaleValue}
              checked={checkboxMaleValue}
              onChange={handleCheckboxMaleValueChange}
            />
          }
          label="Male"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={checkboxFemaleValue}
              checked={checkboxFemaleValue}
              onChange={handleCheckboxFemaleValueChange}
            />
          }
          label="Female"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={checkboxNotPointedValue}
              checked={checkboxNotPointedValue}
              onChange={handleCheckboxNotPointedValueChange}
            />
          }
          label="Not pointed"
        />
      </FormGroup>

      <TableContainer>
        <Table>
          <TableBody>
            {contacts.map((contact, id) => (
              <Contact {...contact} key={id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ContactList;
