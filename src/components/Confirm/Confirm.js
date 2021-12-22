import { Modal, Button } from "react-bootstrap";
import styles from './Confirm.module.css';

const Confirm = ({ show, onClose, onSave }) => {
  return (
    <Modal show={show} onHide={onClose} >
      <Modal.Header closeButton >
        <Modal.Title>Confirm deleting Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles["text"]}>
        <p>Are you sure you want to delete this recipe?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button className={styles["btn-orange"]} variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button className={styles["btn-red"]} variant="primary" onClick={onSave}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirm;
