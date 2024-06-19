import { useDispatch, useSelector } from "react-redux";
import Card from "src/components/Common/Card/Card.jsx";
import {
  addFavouritePokemon,
  addRecentlyViewedPokemon,
} from "src/redux/slices/pokemonSlice.js";
import customColors from "src/util/customColors.js";
import toSentenceCase from "src/util/toSentenceCase.js";

const Home = () => {
  const pokemonState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(pokemonState);
  console.log(dispatch);
  return (
    <div>
      <h2 className="text-xl font-bold w-fit p-2">Recently Viewed Pokemon</h2>

      {pokemonState.recentlyViewedPokemon.length == 0 ? (
        <div className="h-[17rem] flex rounded-lg bg-neutral">
          <div className="m-auto text-neutral-content">
            {"You haven't viewed any pokemon yet, go have a look around!"}
          </div>
        </div>
      ) : (
        <div className="flex overflow-x-scroll">
          {pokemonState.recentlyViewedPokemon.map((pokemon) => (
            <Card
              description={
                pokemon.abilities.length > 1
                  ? `${pokemon.abilities.length} Abilities`
                  : `${pokemon.abilities.length} Ability`
              }
              hoverImageSrc={pokemon.sprites.back_default}
              imageSrc={pokemon.sprites.front_default}
              isFavorite={pokemonState.favoritePokemon.includes(pokemon.name)}
              key={pokemon.id}
              onClick={() => dispatch(addRecentlyViewedPokemon({ pokemon }))}
              setFavorite={(name) =>
                dispatch(addFavouritePokemon(name.toLowerCase()))
              }
              tags={pokemon.types.map((item) => ({
                color: customColors[item.type.name],
                name: item.type.name,
              }))}
              title={toSentenceCase(pokemon.name)}
            />
          ))}
        </div>
      )}
      <h2 className="text-xl font-bold w-fit p-2 pt-6">Random Pokemon</h2>

      <div className="flex flex-wrap justify-center">
        {pokemonState.randomPokemonList.map((pokemon) => (
          <Card
            description={
              pokemon.abilities.length > 1
                ? `${pokemon.abilities.length} Abilities`
                : `${pokemon.abilities.length} Ability`
            }
            hoverImageSrc={pokemon.sprites.back_default}
            imageSrc={pokemon.sprites.front_default}
            isFavorite={pokemonState.favoritePokemon.includes(pokemon.name)}
            key={pokemon.id}
            onClick={() => dispatch(addRecentlyViewedPokemon({ pokemon }))}
            setFavorite={(name) =>
              dispatch(addFavouritePokemon(name.toLowerCase()))
            }
            tags={pokemon.types.map((item) => ({
              color: customColors[item.type.name],
              name: item.type.name,
            }))}
            title={toSentenceCase(pokemon.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
