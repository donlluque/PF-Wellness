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
import { cleanConfirm, disableDoctor } from "../../../redux/actions";
function ConfirmDisable({
  isOpen,
  onClose,
  idDoctor,
  setAux,
  aux,
  user,
  name,
}) {
  const dispatch = useDispatch();

  const { msgConfirm } = useSelector((state) => state);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deshabilitar {user}</ModalHeader>
          {msgConfirm.status !== 200 && (
            <ModalBody>
              ¿Estas seguro que desea deshabilitar al {user} {name}?
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
                  dispatch(disableDoctor(idDoctor));
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
