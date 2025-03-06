interface Props {
  children?: string;
  color?: "primary" | "secondary" | "danger";
  onBtnClick?: () => void;
}

function Button({
  children = "",
  color = "primary",
  onBtnClick = () => {},
}: Props) {
  return (
    <button
      type="button"
      className={"m-3 btn btn-" + color}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
}

export default Button;
