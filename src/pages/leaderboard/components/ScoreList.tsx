interface Props {
  scoreList: {
    name: string;
    minute: number;
    second: number;
  }[];
  firstIndex: number;
}

const ScoreList = ({ scoreList, firstIndex }: Props) => {
  return (
    <>
      {scoreList.map((data, index) => {
        return (
          <li
            key={`score${index}`}
            data-index={firstIndex + index}
            className="flex flex-row justify-between rounded-lg border-4 border-solid border-neutral-200 px-2 py-2 text-lg"
          >
            <div className="flex flex-row gap-3">
              <div className="font-bold">
                {firstIndex + index + 1}
                {'.'}
              </div>
              <div className="w-48 truncate md:w-auto">
                {data.name}
              </div>
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
