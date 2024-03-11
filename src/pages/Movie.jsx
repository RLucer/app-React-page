import React from "react";
import data from "../data.json";
import { Button, Card, Col, Row } from "react-bootstrap";
export const Movie = () => {
  return (
    <div>
      <Row>
        <Col sm={6}>
          {data.movies.map((movie) => (
            <Card key={movie.id} style={{ with: "18rem" }}>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.years}</Card.Text>
                <Button> Search </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col sm={6}></Col>
      </Row>
    </div>
  );
};
