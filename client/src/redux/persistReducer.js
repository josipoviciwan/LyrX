import { actionTypes } from "./actionTypes";

const defaultState = {
  songs: [],
  authors: [],
  songsList: []
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.addSong:
      return {
        ...state,
        songs: [action.payload.song, ...state.songs]
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
    default:
      return state;
  }
}
