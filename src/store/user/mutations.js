export default {
  SET_SEARCH_HISTORY(state, searchHistory) {
    state.searchHistory = searchHistory;
  },
  SET_PLAYHISTORY(state, playHistory) {
    state.playHistory = playHistory;
  },
  SET_FAVORITESONGS(state, favoriteSongs) {
    state.favoriteSongs = favoriteSongs;
  },
  SET_EDITSTATE(state, editState) {
    state.editState = editState;
  }
};
