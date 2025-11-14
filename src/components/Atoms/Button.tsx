function Button(props: ButtonProps) {
  return (
    <button className={`button ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default Button;