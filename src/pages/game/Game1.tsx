import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Characters from './components/Characters';
import Counter from './components/Counter';
import CustomCursor from './components/CustomCursor';
import Popup from './components/Popup';
import ImportedCharacters from '../../components/ImportedCharacters';
import Feedback from './components/Feedback';
import GameoverModal from './components/GameoverModal';

interface Props {
  gameboards: {
    game_1_src: string;
    game_2_src: string;
    game_3_src: string;
  };
}

interface PlayerProps {
  name: string;
  minute: number;
  second: number;
}

interface ImportedCharactersProps {
  [key: string]: string;
}

const Game = ({ gameboards }: Props) => {
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mousePositionY, setMousePositionY] = useState(0);
  const [clickedPositionX, setClickedPositionX] = useState(0);
  const [clickedPositionY, setClickedPositionY] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hover, setHover] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isCharacter, setIsCharacter] = useState({
    name: '',
    isFound: false
  });
  const [characters, setCharacters] = useState([
    { name: 'Waldo', isFound: false, src: '' },
    { name: 'Odlaw', isFound: false, src: '' },
    { name: 'Wizard', isFound: false, src: '' }
  ]);

  const [x, setX] = useState([
    { name: 'Waldo', x: 1642, y: 879 },
    { name: 'Odlaw', x: 610, y: 787 },
    { name: 'Wizard', x: 133, y: 915 }
  ]);
  const [player, setPlayer] = useState<PlayerProps[]>([]);

  useEffect(() => {
    const importedCharacters: ImportedCharactersProps =
      ImportedCharacters();

    const newImages = Object.entries(importedCharacters).map(
      ([key, value], index) => {
        return {
          name: characters[index].name,
          isFound: characters[index].isFound,
          src: value
        };
      }
    );
    setCharacters(newImages);
  }, []);

  useEffect(() => {
    let time: NodeJS.Timer;
    if (!isGameOver) {
      if (second < 60) {
        time = setInterval(() => setSecond(second + 1), 1000);
      }
      if (second === 60) {
        setSecond(0);
        setMinute(minute + 1);
      }
    }
    return () => clearInterval(time);
  }, [second, isGameOver]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hover && !popup && !isFeedback) {
      setHover(true);
    }
    if (!popup) {
      setMousePositionX(e.pageX);
      setMousePositionY(e.pageY);
    }
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseClick = () => {
    if (!isFeedback) {
      setClickedPositionX(mousePositionX);
      setClickedPositionY(mousePositionY);
      setPopup(true);
    }
  };

  const handlePopupClick = (e: React.MouseEvent) => {
    setPopup(false);
    const choosedCharacterName = e.currentTarget.textContent;
    const characterInfo = x.find(
      (element) => element.name === choosedCharacterName
    );
    if (characterInfo != undefined) {
      if (
        clickedPositionX > characterInfo.x - 24 &&
        clickedPositionX < characterInfo.x + 24 &&
        clickedPositionY < characterInfo.y + 24 &&
        clickedPositionY < characterInfo.y + 24
      ) {
        const updatedCharacters = characters.map((character) => {
          if (character.name === characterInfo.name) {
            setIsCharacter({
              name: character.name,
              isFound: true
            });
            return { ...character, isFound: true };
          } else {
            return character;
          }
        });
        setCharacters(updatedCharacters);

        const allCharactersFound = updatedCharacters.every(
          (element) => {
            return element.isFound === true;
          }
        );
        if (allCharactersFound) {
          setIsGameOver(true);
        }
      }
      setIsFeedback(true);

      setTimeout(() => {
        setIsFeedback(false);
        setIsCharacter({ name: '', isFound: false });
      }, 1000);
    }
  };

  const submitScore = (name: string) => {
    const playerArray = player.map((element) => {
      return element;
    });
    playerArray.push({ name, minute, second });

    setPlayer(playerArray);
  };

  return (
    <>
      <Header>
        <Counter minute={minute} second={second} />
        <Characters characters={characters} />
      </Header>
      <main className="flex-1">
        {hover ? (
          <CustomCursor
            mousePositionX={mousePositionX}
            mousePositionY={mousePositionY}
          />
        ) : (
          ''
        )}
        <img
          style={{
            width: '1920px',
            height: '1080px'
          }}
          src={gameboards.game_1_src}
          alt="game-1"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        {popup ? (
          <Popup
            clickedPositionX={clickedPositionX}
            clickedPositionY={clickedPositionY}
            characters={characters}
            handleClick={handlePopupClick}
          />
        ) : (
          ''
        )}
        {isFeedback ? (
          <Feedback
            clickedPositionX={clickedPositionX}
            clickedPositionY={clickedPositionY}
            isCharacter={isCharacter}
          />
        ) : (
          ''
        )}{' '}
        {isGameOver ? (
          <GameoverModal
            minute={minute}
            second={second}
            submitScore={submitScore}
          />
        ) : (
          ''
        )}
      </main>
      <Footer />
    </>
  );
};

export default Game;
