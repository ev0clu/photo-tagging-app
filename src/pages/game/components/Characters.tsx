interface Props {
  characters: { name: string; isFound: boolean; src: string }[];
}

const Characters = ({ characters }: Props) => {
  return (
    <div className="flex h-16 w-96 flex-row items-center justify-center gap-1">
      {characters.map((character, index) => {
        const notFound = 'h-full w-auto';
        const found = 'opacity-30';
        const className = character.isFound
          ? `${notFound} ${found}`
          : `${notFound}`;
        return (
          <img
            className={className}
            src={character.src}
            alt={character.name}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Characters;
