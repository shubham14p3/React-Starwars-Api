import React from "react";
import {Card, Grid, Button} from "semantic-ui-react";

export default function Home({handleDelete, data}) {
  return (
    <>
      <h1>StartWars</h1>
      {/* <h3>Total Counts:{data.count}</h3> */}
      <Grid columns={3}>
        {data.map((films, i) => {
         
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{films.title}</Card.Header>
                  <Card.Description>
                    <strong>Director</strong>
                    <p>{films.director}</p>
                    <strong>Release Date</strong>
                    <p>{films.release_date}</p>
                    <Button value={films.episode_id} onClick={handleDelete} primary>
                      Delete
                    </Button>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
