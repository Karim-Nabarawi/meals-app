import { createContext, ReactNode, useState } from "react";

interface FavouritesContexProps {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavouritesContexProps>({
  ids: [],
  addFavorite(id) {},
  removeFavorite(id) {},
});

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
