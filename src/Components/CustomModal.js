// @src/components/Modal.jsx

import React from "react";
import "./CustomModal.scss";
import ReactDom from "react-dom";

const CustomModal = ({ setIsOpen }) => {
  return ReactDom.createPortal(
    <div className="CustomModal">
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div className={"modalHeader"}>
            <h5 className={"heading"}>Dialog</h5>
          </div>
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className={"modalContent"}>
            Are you sure you want to delete the item?
          </div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <button className={"deleteBtn"} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button className={"cancelBtn"} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("my-app-root")
  );
};

export default CustomModal;
