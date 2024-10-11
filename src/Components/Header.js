import React from "react";
import logoHiragana from "../assets/logoHiragana.png";

export default function Header()
{
    return(
        <>
			<header className="myHeader">
				<img src={logoHiragana}></img>
				<h1>FlashCards</h1>
			</header>
        </>
    );
}