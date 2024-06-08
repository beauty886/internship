import React, { useEffect, useState } from "react";
import './RandomQuote.css'
import twitter_icon from '../Assets/twitter-icon.webp'


const RandomQuote = () => {

    let quotes = [];
    var t='';
    var a='';
    var temp;
    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json();
        console.log("Hello");
        temp=(quotes[(Math.round(Math.random(1,10)*10))]) ;
        console.log(temp.text);
        setQuote({
            text: temp.text,
            author: temp.author,
        });

    }
    useEffect(() => {
        let timerId = setTimeout(() => {
            loadQuotes();
        }, 5000);

        return () => {
            clearTimeout(timerId);
        };
        
    }, );

    

        
    const [quote,setQuote] = useState({

        text: t,
        author:a,
    });

        // const random = () => {
        //     const select = quotes[Math.floor(Math.random()*quotes.length)];
        //     setQuote(select);  
        // }

        // loadQuotes();

    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <div className="icons">
                        
                        <img src={twitter_icon} alt="" />
                                               

                    </div>
                    
                </div>
            </div>
        </div>
    )
    }

export default RandomQuote
