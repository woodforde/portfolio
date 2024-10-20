import React from "react";

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

    return (
        <div
            className="fixed bg-black/10 h-screen w-screen top-0 left-0 flex items-center justify-center"
            onClick={() => closeFunction()}
        >
            <div className="bg-white rounded-md max-h-full max-w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Modal;
