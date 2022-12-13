import React from 'react';
import { Pokemon } from '../types/api/list';
import { Avatar, Card, CardActionArea, CardContent, Chip, Container, Grid, Paper, styled, Typography } from '@mui/material';
import '../App.css';

interface IProps {
  data: Pokemon[];
  handleClickOpen: (url: string) => void
}
const styles = {
  card: { border: "1px solid", margin: "50px" },
  paperTitle: { marginTop: "20px" },
  paper: {
    height: 110,
    lineHeight: '60px',
    width: "250px",
    margin: "15px"
  }
}

export const PokemonList: React.FC<IProps> = ({ data, handleClickOpen }) => {

  return (
    <Card
      style={styles.card}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Pokeman List
          </Typography>
          <Container maxWidth="md">
            {
              <Grid container
                spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                {data.map((x, id) =>
                  <Paper key={`pokeman-${id}`} elevation={8} onClick={() => handleClickOpen(x.url)} style={ styles.paper}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item style={styles.paperTitle}>
                        <Avatar>{x.name[0].toUpperCase()}</Avatar>
                      </Grid>
                      <Grid item>
                        {x.name}
                      </Grid>
                    </Grid>
                  </Paper>
                )}
              </Grid>
            }
          </Container>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
