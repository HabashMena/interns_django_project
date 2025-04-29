//rafce shortcut --> react Arrow function export component

import { ReactNode } from "react";

interface alertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: alertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children};
      <button
        type="button"
        data-bs-dismiss="alert"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
