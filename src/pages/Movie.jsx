import React from 'react'
import data from '../data.json';
import {Button, Card } from 'react-bootstrap'
export const Movie = () => {
  return (
 <div>
    {
      data.movies.map(movie =>(
        <Card key={movie.id} style={{with:'18rem'}}>
          <Card.Img variant ='top' src={movie.image} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.years}</Card.Text>
            <Button> Search </Button>
          </Card.Body>

        </Card>
      ) )
    }
 </div>
  )
}
