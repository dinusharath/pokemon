import React from 'react';
import { Avatar, Card, CardActionArea, CardContent, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { PokemonDetails } from '../types';

interface IProps {
  details: PokemonDetails
}

const styles = {
  divider: { width: "100%", marginTop: "15px" }
}

export const DetailsDialogContent: React.FC<IProps> = ({ details }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              Height:
            </Grid>
            <Grid item xs={12} md={6}>
              {details?.height}
            </Grid>
            <Grid item xs={12} md={6}>
              weight:
            </Grid>
            <Grid item xs={12} md={6}>
              {details?.weight}
            </Grid>
            <Divider variant="middle" style={styles.divider} />
            <Grid item md={12}>
              <Typography gutterBottom variant="h6">
                Abilities
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {details?.abilities.map((ability, id) => <ListItem key={`ability-${id}`}>
                  <ListItemAvatar>
                    <Avatar>
                      {ability.ability.name[0].toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={ability.ability.name} />
                </ListItem>)}
              </List>
            </Grid>
            <Divider variant="middle" style={styles.divider} />
            <Grid item md={12}>
              <Typography gutterBottom variant="h6">
                Types
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {details?.types.map((type, id) => <ListItem key={`type-${id}`}>
                  <ListItemAvatar>
                    <Avatar>
                      {type.type.name[0].toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={type.type.name} />
                </ListItem>)}
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
