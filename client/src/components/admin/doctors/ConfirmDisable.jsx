import {
  Icon,
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
function ConfirmDisable({
  isOpen,
  onClose,

  setAux,
  aux,
  user,
}) {
  const dispatch = useDispatch();

  const { msgConfirm, doctorDetail, patientDetail } = useSelector(
    (state) => state
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deshabilitar {user}</ModalHeader>
          {msgConfirm.status !== 200 && (
            <ModalBody>
              ¿Estas seguro que desea deshabilitar al {user}{" "}
              {doctorDetail ? doctorDetail.name : patientDetail.name}?
            </ModalBody>
          )}
          {msgConfirm.status === 200 && (
            <ModalBody>
              <Alert status="success">
                <AlertIcon />
                {msgConfirm.statusText}
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
                  doctorDetail
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
                Close
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmDisable;
