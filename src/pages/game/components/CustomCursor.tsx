interface Props {
  mousePositionX: number;
  mousePositionY: number;
}

const CustomCursor = ({ mousePositionX, mousePositionY }: Props) => {
  return (
    <div
      style={{
        left: `${mousePositionX - 24}` + 'px',
        top: `${mousePositionY - 24}` + 'px'
      }}
      className={`pointer-events-none absolute z-50 h-12 w-12 rounded-full border-4 border-dashed border-amber-600 bg-black/25`}
    ></div>
  );
};

export default CustomCursor;
