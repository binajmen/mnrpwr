export function Button(props: any) {
  return (
    <button
      style={{ backgroundColor: "red", color: "white", borderRadius: "5px" }}
      {...props}
    >
      {props.children}
    </button>
  );
}
