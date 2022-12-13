import React, { } from 'react';
import '../App.css';
import { Dialog, DialogContent, DialogTitle, Grid, Skeleton, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { PokemonDetails } from '../types';
import { DetailsDialogContent } from './detailsDialogContent';

interface IProps {
  details: PokemonDetails | null;
  open: boolean;
  handleClose: () => void;
}

const styles = {
  skelton: { margin: "5px" },
  closeIcon: { cursor: 'pointer', marginTop: '5px', width: '20px' }
}

export const DetailsDialog: React.FC<IProps> = ({ details, open, handleClose }) => {

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <>
        <DialogTitle>
          {details?.name ?
            <Grid
              justifyContent={"space-between"}
              container
              spacing={24}
            >
              <Grid item>
                <Typography gutterBottom>
                  {details?.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom>
                  <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' alt={"close icon"} onClick={() => handleClose()} style={styles.closeIcon} />
                </Typography>
              </Grid>
            </Grid>
            :
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} style={styles.skelton} />
          }
        </DialogTitle>
        <DialogContent>
          {details ? <DetailsDialogContent
            details={details}
          />
            :
            <div className='skelton-container'>
              <Skeleton variant="rectangular" width={210} height={60} style={styles.skelton} />
              <Skeleton variant="circular" width={40} height={40} style={styles.skelton} />
              <Skeleton variant="rounded" width={210} height={60} style={styles.skelton} />
            </div>
          }
        </DialogContent>
      </>
    </Dialog>
  );
}
