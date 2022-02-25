import React, { useState } from 'react';
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

    return (
        <>
            <Header />
            <div className='game-container'>
                <Figure />
                <WrongLetters />
                <Words selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
        </>
    )
}
