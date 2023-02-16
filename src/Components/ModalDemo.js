import React, { useState } from "react";
import "./ModalDemo.scss";
import CustomModal from "./CustomModal";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"ModalDemo"}>
      <main>
        <button className={"primaryBtn"} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen && <CustomModal setIsOpen={setIsOpen} />}
      </main>
    </div>
  );
};

export default ModalDemo;
