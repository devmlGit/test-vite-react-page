import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show m-3"
      role="alert"
    >
      {children}
      <button type="button" className="btn-close" onClick={onClose} />
    </div>
  );
};

export default Alert;
