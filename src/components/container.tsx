import React, { useEffect, useState } from 'react';
import '../App.css';
import { getPokemonDetails, getPokemons } from '../services/api/race-api-service';
import { Pokemon } from '../types/api/list';
import { PokemonDetails } from '../types';
import { PokemonList } from './pokemonList';
import { DetailsDialog } from './detailsDialog';

export const Container: React.FC = () => {

  const [data, setData] = useState<Pokemon[]>();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getPokemons(501);
    setData(res.results);
  }

  const handleClickOpen = async (url: string) => {
    setOpen(true);
    const res = await getPokemonDetails(url);
    setDetails(res);
  };

  const handleClose = () => {
    setOpen(false);
    setDetails(null);
  };

  return (
    <div>
      {data &&
        <PokemonList
          data={data}
          handleClickOpen={handleClickOpen}
        />

      }
      {open && <DetailsDialog
        details={details}
        open={open}
        handleClose={handleClose}
      />}
    </div>
  );
}
