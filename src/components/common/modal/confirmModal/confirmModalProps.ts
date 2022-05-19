export default interface IConfirmModalProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  mainButtonText: string;
  mainButtonAction: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
};