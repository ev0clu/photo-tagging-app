import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import database from '../../components/firebase-config';
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc
} from 'firebase/firestore';

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
  const [isPopup, setIsPopup] = useState(false);
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

  const { id } = useParams();

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
    if (!hover && !isPopup) {
      setHover(true);
    }
    if (!isPopup) {
      setMousePositionX(e.pageX);
      setMousePositionY(e.pageY);
    }
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseClick = (e: React.MouseEvent) => {
    if (!isFeedback && !isPopup) {
      setClickedPositionX(e.nativeEvent.offsetX);
      setClickedPositionY(e.nativeEvent.offsetY);
      setIsPopup(true);
      setHover(false);
    }
  };

  const handlePopupClick = async (e: React.MouseEvent) => {
    const choosedCharacterName = e.currentTarget.textContent;
    setIsPopup(false);
    setHover(true);

    if (choosedCharacterName !== null) {
      const characterCoordinates = await getCoordinates(
        database,
        choosedCharacterName
      );

      const characterInfo = characterCoordinates.find(
        (element) => element.name === choosedCharacterName
      );
      if (characterInfo !== undefined) {
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
    }
  };

  const getCoordinates = async (
    db: Firestore,
    characterName: string
  ) => {
    const charactersCollection = collection(db, `game-${id}-data`);
    const querryCharactersCollection = query(
      charactersCollection,
      where('name', '==', characterName)
    );
    const charactersSnapshot = await getDocs(
      querryCharactersCollection
    );
    const coordinateList = charactersSnapshot.docs.map((doc) =>
      doc.data()
    );

    return coordinateList;
  };

  const submitScore = async (name: string) => {
    // Add a new entry to the Firebase database.
    try {
      await setDoc(doc(database, `game-${id}-leaderboard`, name), {
        name: name,
        minute: minute,
        second: second
      });
    } catch (error) {
      console.error(
        'Error writing new data to Firebase Database',
        error
      );
    }
  };

  return (
    <>
      <Header>
        <Counter minute={minute} second={second} />
        <Characters characters={characters} />
      </Header>
      <main className="flex flex-1 items-center justify-center">
        <div className="relative">
          <img
            style={{
              width: '1920px',
              height: '1080px',
              cursor: `${!isPopup ? 'none' : 'pointer'}`
            }}
            src={
              gameboards[`game_${id}_src` as keyof typeof gameboards]
            }
            alt="game-1"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
          />
          {isPopup ? (
            <Popup
              clickedPositionX={clickedPositionX}
              clickedPositionY={clickedPositionY}
              characters={characters}
              handleClick={handlePopupClick}
            />
          ) : (
            ''
          )}
        </div>
        {hover ? (
          <CustomCursor
            mousePositionX={mousePositionX}
            mousePositionY={mousePositionY}
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
