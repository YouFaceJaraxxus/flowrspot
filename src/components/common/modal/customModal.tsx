import Modal from '@mui/material/Modal';
import { ModalBox, ModalBoxContent, ModalCloseButton } from './customModalStyle';
import ICustomModalProps from './customModalProps';

const CustomModal = ({
  children,
  isOpen,
  handleClose,
  backgroundColor,
  showOnTop,
  hasCloseButton,
}: ICustomModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox sx={{
        backgroundColor: backgroundColor,
        ...(showOnTop && { zIndex: 1000 })
      }}>
        <ModalBoxContent>
          {hasCloseButton && (
            <ModalCloseButton onClick={handleClose}>&#10006;</ModalCloseButton>
          )}
          {children}
        </ModalBoxContent>
      </ModalBox>
    </Modal>
  );
};

export default CustomModal;