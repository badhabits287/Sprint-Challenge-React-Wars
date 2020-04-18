import React from "react";
import { Card, CardHeader, Col, CardBody, CardText } from "reactstrap";




  
const CharacterCard = ({ char }) => {
  console.log(char);
  return (
   
    <Col xs="6" md="4" xl="3">
      <Card >
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
