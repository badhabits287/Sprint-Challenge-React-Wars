import React from "react";
import { Card, CardHeader, Col,CardImg, CardBody, CardText } from "reactstrap";


  
const CharacterCard = ({ char }) => {
  console.log(char);
  return (
   

    <Col sm={{ size: '2', offset: 1 }}>
      <Card style={{ borderRadius:'10px'}} color='warning'>
      <CardImg src={char.image} alt="profile pic" style={{ borderRadius:'100%'}} />
        <CardHeader>{char.name}</CardHeader>
        <CardBody>
          <CardText> {char.species}</CardText>
          <CardText> {char.gender}</CardText>
          <CardText> {char.origin.name}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};


export default CharacterCard;
