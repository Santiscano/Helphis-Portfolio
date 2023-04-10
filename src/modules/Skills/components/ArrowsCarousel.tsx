export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "red", left: "-25px" }}
      onClick={onClick}
    />
  );
}

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "blue", right: "-25px" }}
      onClick={onClick}
    />
  );
}
