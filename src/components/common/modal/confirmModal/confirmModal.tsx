import IConfirmModalProps from './confirmModalProps';
import CustomModal from '../customModal';
import { ButtonsWrapper, ConfirmModalTitle, ConfirmModalWrapper, ConfirmationModalButton } from './confirmModalStyle';

const ConfirmModal = ({
  isOpen,
  handleClose,
  title,
  mainButtonText,
  mainButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
}: IConfirmModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      handleClose={handleClose}
      hasCloseButton
    >
      <ConfirmModalWrapper>
        <ConfirmModalTitle>
          {title}
        </ConfirmModalTitle>
        <ButtonsWrapper>
          <ConfirmationModalButton onClick={() => mainButtonAction()}>
            {mainButtonText}
          </ConfirmationModalButton>
          {secondaryButtonAction && <ConfirmationModalButton onClick={() => secondaryButtonAction()}>
            {secondaryButtonText}
          </ConfirmationModalButton>}
        </ButtonsWrapper>
      </ConfirmModalWrapper>
    </CustomModal>
  );
};

export default ConfirmModal;