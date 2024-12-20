import { create } from "zustand";

const useStore = create( (set)=>(
    {
        favorites: [],
        addToFavorites: ( newFavorite )=>{
            set( ( state )=>( {favorites: [ ...state.favorites, newFavorite ] } ) )
        }
    }
))

export default useStore