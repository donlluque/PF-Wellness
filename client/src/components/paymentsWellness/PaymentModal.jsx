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

function PaymentModal({ onClose, isOpen, paymentActive, linkPayment }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
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
                src={linkPayment}
                width="100%"
                height="500"
                title="wellness"
                allow="fullscreen"
                allowpaymentrequest
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
