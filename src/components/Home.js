import React from 'react'
import {Card,Grid} from 'semantic-ui-react';


export default function Home({data}) {
    return (
        <>
        <h1>StartWars</h1>
        <Grid columns={3}>
            {data.map((films,i)=>{
                return(
                    <Grid.Column key={i}>
                    <Card>
                    <Card.Content>
                        <Card.Header>{films.title}</Card.Header>
                        <Card.Description>
                        <strong>Director</strong>
                        <p>{films.director}</p>
                        <strong>Release Date</strong>
                        <p>{films.release_date}</p>
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
