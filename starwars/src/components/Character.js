// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import { Container, Row } from "reactstrap";


export default function Character() {

  
 
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setChars(res.data.results);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  console.log("Characters:", chars);

  return (
    <Container>
    <Row>
    {chars.map(char => {
          return <CharacterCard key={char.id} char={char} name={char.name} />;
        })}
    </Row>
  </Container>
  );
}
