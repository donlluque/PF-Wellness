import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  IconButton,
  Input,
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { GrSearch } from "react-icons/gr";
import { searchPatientByName } from "../../redux/actions";

export default function SearchBarPatient() {
  const [empty, setEmpty] = useState(false);
  const dispatch = useDispatch();
  const [patient, setPatient] = useState("");

  function handleChange(e) {
    setPatient(e.target.value); //el valor del input.
  }

  function handleClick(e) {
    if (patient) {
      dispatch(searchPatientByName(patient));
      setPatient("patient");
    } else {
      setEmpty(true);
    }
  }

  return (
    <>
      <Box m="1rem" display="flex" flexDirection="row">
        <Input
          type="text"
          value={patient}
          placeholder="Buscar Paciente"
          variant="flushed"
          colorScheme={"teal"}
          onChange={(e) => handleChange(e)}
        />
        <IconButton
          onClick={(e) => handleClick(e)}
          aria-label="Search database"
          icon={<GrSearch />}
        />
      </Box>
      {empty && (
        <Alert status="warning" mb="0.5rem">
          <AlertIcon />
          <AlertDescription>Ingresar nombre del paciente</AlertDescription>
        </Alert>
      )}
    </>
  );
}
