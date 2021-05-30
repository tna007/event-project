import React from "react";
import Card from "react-bootstrap/Card";
import "./BeachTemprature.css"



const BeachTempratureCard = ({beachTemprature}) => {
  return (
    <Card key={beachTemprature.id}>
      <Card.Img variant="top" src={beachTemprature.image} alt={beachTemprature.name} />
      <Card.Body>
        <Card.Title>{beachTemprature.beachName}</Card.Title>
         <Card.Text style={beachTemprature.waterTemp>10 ? {'background-color': "orange"}:{'background-color': "#42b6f5"}}>{"Water temprature is " + beachTemprature.waterTemp +"°C "}  
         {"Air temprature is " + beachTemprature.airTemp +"°C  " }</Card.Text> 
      </Card.Body>
    </Card>
  );
};

export default BeachTempratureCard;