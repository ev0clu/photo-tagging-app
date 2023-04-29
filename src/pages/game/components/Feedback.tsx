interface Props {
  clickedPositionX: number;
  clickedPositionY: number;
  isCharacter: { name: string; isFound: boolean };
}

const Feedback = ({
  clickedPositionX,
  clickedPositionY,
  isCharacter
}: Props) => {
  return (
    <div
      style={{
        left: `${clickedPositionX}` + 'px',
        top: `${clickedPositionY}` + 'px'
      }}
      className={`${
        isCharacter.isFound ? 'text-green-600' : 'text-red-600'
      } absolute animate-feedback whitespace-nowrap rounded-xl bg-slate-100 px-6 py-2 text-xl shadow-custom-1`}
    >
      {isCharacter.isFound
        ? `You found ${isCharacter.name}!`
        : 'Not found! Try again!'}
    </div>
  );
};

export default Feedback;
