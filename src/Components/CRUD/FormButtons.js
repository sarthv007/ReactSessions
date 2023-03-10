import React from "react";
import { Button, FormGroup } from "reactstrap";

function FormButtons({ btnText }) {
  return (
    <div>
      <FormGroup>
        <Button color="primary" type="submit">
          {btnText}
        </Button>
      </FormGroup>
      ;
    </div>
  );
}

export default FormButtons;
