//Action creator
export const selectSong = song => {
  // Return an actions
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
