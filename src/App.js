import React, { useState, useEffect } from 'react';
import './App.css';
import { Figure } from './components/Figure';
import { Header } from './components/Header';
import { WrongLetters } from './components/WrongLetters';
import { Words } from './components/Words';
import { Notification } from './components/Notification';
import { Popup } from './components/Popup';
import { showNotification as show } from './helpers/helpers';

const words = ['application', 'developer', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];


export const App = () => {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;
          if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            }
          }
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
      }, [correctLetters, wrongLetters, playable]);

    return (
        <>
            <Header />
            <div className='game-container'>
                <Figure wrongLetters={wrongLetters}/>
                <WrongLetters wrongLetters={wrongLetters} />
                <Words selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
            <Popup />
            <Notification showNotification={showNotification}/>
        </>
    )
}
