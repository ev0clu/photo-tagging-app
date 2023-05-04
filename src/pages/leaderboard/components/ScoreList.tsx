interface Props {
  scoreList: {
    name: string;
    minute: number;
    second: number;
  }[];
}

const ScoreList = ({ scoreList }: Props) => {
  return (
    <>
      {scoreList.map((data, index) => {
        return (
          <li
            key={`score${index}`}
            data-index={index}
            className="flex w-96 flex-row justify-between rounded-lg border-4 border-solid border-neutral-200 px-8 py-2 text-lg"
          >
            <div className="flex flex-row gap-3">
              <div className="font-bold">
                {index + 1}
                {'.'}
              </div>
              {data.name}
            </div>
            <div>
              {data.minute}:
              {data.second.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
              })}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ScoreList;
