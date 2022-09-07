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

  const { msgConfirm, doctorDetail, patientDetail } = useSelector(
    (state) => state
  );

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Habilitar {user}</ModalHeader>
          {msgConfirm.status !== 200 && (
            <ModalBody>
              ¿Estas seguro que desea habilitar al {user}{" "}
              {user === "doctor" ? doctorDetail.name : patientDetail.name}?
            </ModalBody>
          )}
          {msgConfirm.status === 200 && (
            <ModalBody>
              <Alert status="success">
                <AlertIcon />
                El {user}{" "}
                {user === "doctor" ? doctorDetail.name : patientDetail.name} fue
                habilitado con exito!
              </Alert>
            </ModalBody>
          )}
          {msgConfirm.status !== 200 && (
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
                  user === "doctor"
                    ? dispatch(disableDoctor(doctorDetail.id))
                    : dispatch(disablePatient(patientDetail.id));
                }}
              >
                Continuar
              </Button>
            </ModalFooter>
          )}
          {msgConfirm.status === 200 && (
            <ModalFooter>
              <Button
                colorScheme="teal"
                variant="ghost"
                mr={3}
                onClick={() => {
                  dispatch(cleanConfirm());
                  onClose();
                  setAux(!aux);
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
