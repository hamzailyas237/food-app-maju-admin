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
import RadioButton from "../radioButton/RadioButton";
import { useState } from "react";

function StatusModal({
  text,
  heading,
  styles,
  headingStyle,
  onReject,
  onAccept,
  onRejectBtnText,
  onAcceptBtnText,
  rejectBtnStyle,
  acceptBtnStyle,
  options,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState("");
  // console.log(isActive);
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
            width: "400px",
          }}
        >
          <ModalHeader style={headingStyle}>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {options.map((item, i) => {
              return (
                <RadioButton
                  key={i}
                  label={item}
                  onChange={(e) => setIsActive(e.target.value)}
                />
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="#00b4d8"
              style={rejectBtnStyle}
              mr={3}
              onClick={() => {
                onClose();
                onReject();
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
                onAccept(isActive);
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

export default StatusModal;
