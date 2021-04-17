import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Alert } from 'react-bootstrap';
import useDeleteUser from '../../hooks/useDeleteUser';

const DeleteAccountModal = ({
  authorizedUser,
  showDeleteModal,
  setShowDeleteModal,
}) => {
  const [errorInfo, setErrorInfo] = useState('');
  const [successInfo, setSuccessInfo] = useState('');
  const [deleteUser] = useDeleteUser();
  const history = useHistory();

  const deleteAccount = async () => {
    try {
      await deleteUser({ id: authorizedUser.id });
      setSuccessInfo('Account is deleted');
      setTimeout(() => { setSuccessInfo(''); setShowDeleteModal(false); history.push('/'); }, 3000);
    } catch (e) {
      setErrorInfo(e.message);
      setTimeout(() => { setErrorInfo(''); }, 3000);
    }
  };

  return (
    <>
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Delete your account?
          </Modal.Title>
        </Modal.Header>
        {errorInfo && (
        <Alert variant="danger">
          {errorInfo}
        </Alert>
        )}
        {successInfo && (
          <Alert variant="success">
            {successInfo}
          </Alert>
        )}
        <Modal.Footer>
          <button className="more-photos-btn" type="button" onClick={() => setShowDeleteModal(false)}>
            Close
          </button>
          <button className="delete-btn" type="button" onClick={() => deleteAccount()}>
            <i className="bi bi-trash-fill icon-delete" />
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;
