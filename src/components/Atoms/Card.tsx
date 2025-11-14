function Card(props: CardProps) {
  return (
    <div className="card p-4 border shadow-md rounded">
      {props.children}
    </div>
  );
}

export interface CardProps {
  children: React.ReactNode;
}

export default Card;