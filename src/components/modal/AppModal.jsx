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
import AppButton from "../button/AppButton";

function AppModal({
  text,
  heading,
  body,
  styles,
  headingStyle,
  icon,
  onReject,
  onAccept,
  onRejectBtnText,
  onAcceptBtnText,
  rejectBtnStyle,
  acceptBtnStyle,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <AppButton onClick={onOpen} text={text} styles={styles} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
              height: "80px",
              width: "80px",
            }}
          />
          <ModalHeader style={headingStyle}>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="#00b4d8"
              style={rejectBtnStyle}
              mr={3}
              onClick={() => {
                onClose();
                onReject && onReject();
              }}
            >
              {onRejectBtnText}
            </Button>
            <Button
              colorScheme="#e4201e"
              style={acceptBtnStyle}
              mr={3}
              onClick={() => {
                onClose();
                onAccept();
              }}
            >
              {onAcceptBtnText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AppModal;
