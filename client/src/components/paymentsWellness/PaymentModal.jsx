import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function PaymentModal({ onClose, paymentActive, linkPayment }) {
  return (
    <>
      <Modal
        isOpen={paymentActive}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader colorScheme="teal">
            Suscribirse a Wellness Asociados
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <iframe
                border="3px solid black"
                src={linkPayment}
                width="100%"
                height="500"
                title="prueba"
                allow="fullscreen"
              ></iframe>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PaymentModal;
