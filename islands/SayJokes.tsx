/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { JOKES } from '../routes/api/joke.ts';

function SayJokes() {

  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const joke = JOKES[randomIndex];

  return (
    <h1>{joke}</h1>
  )
}

export default SayJokes