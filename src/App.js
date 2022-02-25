import React, { useState, useEffect } from 'react';
import './App.css';
import { Figure } from './components/Figure';
import { Header } from './components/Header';
import { WrongLetters } from './components/WrongLetters';
import { Words } from './components/Words';

const words = ['application', 'developer', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];


export const App = () => {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    useEffect(() => {
        const handleKeyDown = event => {
            const {key, keyCode} = event;

            if(playable && keyCode >= 65 && keyCode <= 90 ){
                const letter = key.toLowerCase();

                if(selectedWord.includes(letter)){
                    if(!correctLetters.includes(letter)){
                        setCorrectLetters(correctLetters => [...correctLetters, letter]);
                    }else{ 
                        // showNotification()
                    }
                }else{
                    if(!wrongLetters.includes(letter)){
                        setWrongLetters(wrongLetters => [...wrongLetters, letter]);
                    }else{
                        // showNotifications();
                    }
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown); 
    }, correctLetters, wrongLetters, playable);

    return (
        <>
            <Header />
            <div className='game-container'>
                <Figure />
                <WrongLetters wrongLetters={wrongLetters} />
                <Words selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
        </>
    )
}
