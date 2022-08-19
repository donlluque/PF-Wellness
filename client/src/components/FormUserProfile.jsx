import {
  Image,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  FormControl,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { putPatient } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePatient } from "../redux/actions";

function FormUserProfile() {
  const [form, setForm] = useState({});
  const [putActive, setPutActive] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataPatient = useSelector((state) => state.patientDetail);

  useEffect(() => {
    dispatch(getOnePatient(id));
    setForm({ ...form, dataPatient });
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putPatient(form));
    setPutActive(false);
  };

  const handlePutActive = () => {
    setPutActive(true);
  };

  return (
    <>
      <Box display={{ md: "flex" }} justifyContent="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            w="200px"
            src="https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg"
            alt=""
          />
          {!putActive && (
            <Button
              m="2rem"
              onClick={handlePutActive}
              colorScheme="teal"
              variant="solid"
            >
              Modificar datos
            </Button>
          )}
        </Box>

        <FormControl
          w="50rem"
          isDisabled={!putActive}
          onSubmit={(e) => handleSubmit(e)}
          m="1rem"
        >
          <FormLabel m="1rem" htmlFor="name">
            Nombre
          </FormLabel>
          <Input
            value={form.name}
            onChange={(e) => handleChange(e)}
            name="name"
            placeholder="Escribe nombre completo"
          />
          <FormLabel m="1rem" htmlFor="last_name">
            Apellido
          </FormLabel>
          <Input
            value={form.last_name}
            onChange={(e) => handleChange(e)}
            name="last_name"
            placeholder="Escribe apellido"
          />
          <FormLabel m="1rem" htmlFor="birthday">
            Fecha de nacimiento
          </FormLabel>
          <Input
            value={form.birthday}
            onChange={(e) => handleChange(e)}
            type="date"
            name="birthday"
          />
          <FormLabel m="1rem" htmlFor="document">
            Cédula de identificación
          </FormLabel>
          <InputGroup>
            <InputLeftAddon children="DNI" />
            <Input
              value={form.document}
              onChange={(e) => handleChange(e)}
              type="number"
              name="document"
              placeholder="Nro de documento"
            />
          </InputGroup>
          <FormLabel m="1rem" htmlFor="phone">
            Tel/Cel
          </FormLabel>

          <Input
            value={form.phone}
            onChange={(e) => handleChange(e)}
            type="tel"
            name="phone"
            placeholder="Nro de telefono"
          />

          <FormLabel m="1rem" htmlFor="nacionality">
            Nacionalidad
          </FormLabel>
          <Input
            value={form.nationality}
            onChange={(e) => handleChange(e)}
            name="nacionality"
            placeholder="Nacionalidad"
          />
          <FormLabel m="1rem" htmlFor="direction">
            Dirección
          </FormLabel>

          <Input
            value={form.direction}
            onChange={(e) => handleChange(e)}
            name="direction"
            placeholder="Calle, N°, depto"
          />

          <FormLabel m="1rem" htmlFor="prepaid">
            Obra social
          </FormLabel>
          <Select
            value={form.prepaid}
            onChange={(e) => handleChange(e)}
            name="prepaid"
          >
            <option>Seleccionar una opción</option>
            <option value="Galeno">Galeno</option>
            <option value="Medicus">Medicus</option>
            <option value="Medife">Medife</option>
            <option value="Osde">Osde</option>
            <option value="Parque Salud">Parque Salud</option>
            <option value="Swiss Medical">Swiss Medical</option>
          </Select>
          <Button
            mt="1rem"
            onClick={(e) => handleSubmit(e)}
            type="submit"
            colorScheme="teal"
            variant="solid"
          >
            Guardar
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default FormUserProfile;
