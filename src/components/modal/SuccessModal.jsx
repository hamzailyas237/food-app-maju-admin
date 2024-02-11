import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function SuccessModal({
  open,
  heading,
  body,
  headingStyle,
  icon,
  closeBtnText,
  closeBtnStyle,
  closeBtnAction,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Modal isOpen={open} onClose={closeBtnAction} isCentered>
        <ModalOverlay />
        <ModalContent
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            src={icon}
            alt="image"
            style={{
              height: "50px",
              width: "50px",
            }}
          />
          <ModalHeader style={headingStyle}>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="#e4201e"
              style={closeBtnStyle}
              mr={3}
              onClick={() => {
                closeBtnAction();
              }}
            >
              {closeBtnText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SuccessModal;
