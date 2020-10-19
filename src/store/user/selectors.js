export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user;
export const selectCompositions = (state) => state.user.compositions;
export const selectCompositionNames = (state) =>
  state.user.compositions.map((composition) => {
    return { id: composition.id, compositionName: composition.compositionName };
  });
export const selectCompositionById = (id) => (state) => {
  const compositionById = state.user.compositions.find((composition) => {
    return composition.id == id;
  });

  return compositionById || {};
};
