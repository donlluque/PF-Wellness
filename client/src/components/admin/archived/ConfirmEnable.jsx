import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Alert,
  AlertIcon,
  Button,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import {
  cleanConfirm,
  disableDoctor,
  disablePatient,
} from "../../../redux/actions";
function ConfirmEnable({ isOpen, onClose, idDoctor, aux, setAux, name, user }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const { doctorDetail, patientDetail } = useSelector((state) => state);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Habilitar {user}</ModalHeader>
          {!active && (
            <ModalBody>
              ¿Estas seguro que desea habilitar al {user}{" "}
              {user === "doctor" ? doctorDetail.name : patientDetail.name}?
            </ModalBody>
          )}
          {active && (
            <ModalBody>
              <Alert status="success">
                <AlertIcon />
                El {user}{" "}
                {user === "doctor" ? doctorDetail.name : patientDetail.name} fue
                habilitado con exito!
              </Alert>
            </ModalBody>
          )}
          {!active && (
            <ModalFooter>
              <Button
                colorScheme="teal"
                variant="ghost"
                mr={3}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="teal"
                mr={3}
                onClick={() => {
                  setActive(true);
                  user === "doctor"
                    ? dispatch(disableDoctor(doctorDetail.id))
                    : dispatch(disablePatient(patientDetail.id));
                }}
              >
                Continuar
              </Button>
            </ModalFooter>
          )}
          {active && (
            <ModalFooter>
              <Button
                colorScheme="teal"
                variant="ghost"
                mr={3}
                onClick={() => {
                  dispatch(cleanConfirm());
                  onClose();
                  setAux(!aux);
                  setActive(false);
                }}
              >
                Cerrar
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmEnable;
