import { actionTypes } from "./actionTypes";

const defaultState = {
  songs: [],
  authors: [],
  songsList: [],
  search: "Pronađite pjesmu..."
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.addSong:
      return {
        ...state,
        songs: [
          ...new Set(
            [action.payload.song, ...state.songs].map(item =>
              JSON.stringify(item)
            )
          )
        ].map(item => JSON.parse(item))
      };
    case actionTypes.updateAuthors:
      return {
        ...state,
        authors: action.payload.authors
      };
    case actionTypes.updateSongs:
      return {
        ...state,
        songsList: action.payload.songsList
      };
    case actionTypes.updateSearch:
      return {
        ...state,
        search: action.payload.search
      };
    default:
      return state;
  }
}
