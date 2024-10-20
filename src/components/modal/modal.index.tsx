import React from "react";
import ReactDOM from "react-dom";

const OVERLAY_STYLES: React.CSSProperties = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: "0.7",
};
const CONTENT_STYLES: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    borderRadius: "6px",
    overflow: "hidden",
    maxHeight: "90%",
    maxWidth: "90%",
};

const Modal = ({
    open,
    closeFunction,
    children,
}: {
    open: boolean;
    closeFunction: () => void;
    children: React.ReactElement;
}) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <React.Fragment>
            <div style={OVERLAY_STYLES} onClick={() => closeFunction()} />
            <div style={CONTENT_STYLES}>{children}</div>
        </React.Fragment>,
        document.getElementById("modal-portal")
    );
};

export default Modal;
