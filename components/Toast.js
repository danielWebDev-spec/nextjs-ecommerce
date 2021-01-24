import React from "react";

const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`toast show position-fixed text-light ${bgColor}`}
      style={{ top: 5, right: 5, zIndex: 9, minWidth: 280 }}
    >
      <div className={`toast-header ${bgColor} text-light`}>
        <strong className="mr-auto text-primary text-light">{msg.title}</strong>

        <button
          type="button"
          className="ml-2 mb-1 close text-light"
          data-dismiss="toast"
          style={{ outline: "none" }}
          onClick={handleShow}
        >
          x
        </button>
      </div>

      <div className="toast-body">{msg.msg}</div>
    </div>
  );
};

export default Toast;
