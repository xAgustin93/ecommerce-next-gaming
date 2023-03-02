import { Modal } from "semantic-ui-react";

export function BasicModal(props) {
  const { children, show, onClose, title } = props;

  return (
    <Modal open={show} onClose={onClose} size="small">
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}
