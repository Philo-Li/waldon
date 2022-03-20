import React from 'react';

import { Button, Spinner } from 'react-bootstrap';
import { Form } from 'formik';

import TextInputDescription from '../../others/TextInputDescription';

const EditCollectionForm = ({ loading }) => (
  <Form>
    <div className="col-item-1">
      <TextInputDescription
        name="content"
        type="text"
        placeholder="Comment here..."
      />
    </div>

    <div className="col-item-1">
      {!loading && (
        <Button variant="primary" id="comment-button" type="submit" block="true">
          Comment
        </Button>
      )}
      {loading && (
        <Button variant="primary" id="comment-button-loading" disabled block="true">
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </Button>
      )}
    </div>
  </Form>
);

export default EditCollectionForm;