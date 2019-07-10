import { actionTypes } from "./actionTypes";

export const getPersistActions = {
  updateAuthors: data => ({
    type: actionTypes.updateAuthors,
    payload: { authors: data }
  }),
  updateSongs: data => ({
    type: actionTypes.updateSongs,
    payload: { songsList: data }
  }),
  addSong: data => ({
    type: actionTypes.addSong,
    payload: { song: data }
  }),
  updateSearch: data => ({
    type: actionTypes.updateSearch,
    payload: { search: data }
  })
};
