import React from "react"
import { useState } from "react";
import hiragana from "../assets/Hiragana";
import katakana from "../assets/Katakana";

let frontFace = true
let frontFaceKatakana = true
let cardIndex =0; 
export default function FlashCard()
{
    const [cardNumber,setCardNumber] = useState(cardIndex)
    const [cardFaceHiragana,setCardFaceHiragana] = useState(hiragana[cardIndex].simbolo)
    const [cardFaceKatakana,setCardFaceKatakana] = useState(katakana[cardIndex].simbolo)
    
    return(
        <>
            <h1 className="Alphabet">Hiragana</h1>
            <div className="Card">
                <div className="CardInfo" onClick={flipCard}>
                    <h1 className="FrontInfo">{cardFaceHiragana}</h1>
                </div>
            </div>
            <h1 className="Alphabet">Katakana</h1>
            <div className="Card">
                <div className="CardInfo" onClick={flipCardKatakana}>
                    <h1 className="FrontInfo">{cardFaceKatakana}</h1>
                </div>
            </div>
            <div className="FooterButtons">
                <div className="BtnContainer">
                        <BtnResposta classe="ButtonResposta" texto="De Primeira"/>
                        <BtnResposta classe="ButtonResposta" texto="Por Pouco"/>
                        <BtnResposta classe="ButtonResposta" texto="Não Deu :("/>
                </div>
                <h2>Concluído {cardNumber+1}/{hiragana.length}</h2>
            </div>   
        </>
    );
    
    function flipCard()
    {
        if(frontFace){
            setCardFaceHiragana(hiragana[cardIndex].silaba);
            frontFace=false;
        }else
        {
            setCardFaceHiragana(hiragana[cardIndex].simbolo);
            frontFace=true;
        }
    }

    function flipCardKatakana()
    {
        if(frontFaceKatakana){
            setCardFaceKatakana(katakana[cardIndex].silaba);
            frontFaceKatakana=false;
        }else
        {
            setCardFaceKatakana(katakana[cardIndex].simbolo);
            frontFaceKatakana=true;
        }
    }


    function nextCard()
    {
        if(cardIndex<45){
            cardIndex++
            setCardNumber(cardIndex)
            setCardFaceHiragana(hiragana[cardIndex].simbolo)
            frontFace=true
            setCardFaceKatakana(katakana[cardIndex].simbolo);
            frontFaceKatakana=true;
        }else
        {
            cardIndex=0
            setCardNumber(cardIndex)
            setCardFaceHiragana(hiragana[cardIndex].simbolo)
            frontFace=true
            setCardFaceKatakana(katakana[cardIndex].simbolo);
            frontFaceKatakana=true;
        }
    }

    function BtnResposta(props)
    {
        return(
            <button onClick={nextCard} className={props.classe}>
                {props.texto}
            </button>
        );
    }

}




