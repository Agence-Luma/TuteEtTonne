export const useCoupDeCoeur = (uid?: string) => {
  const prismic = usePrismic()
  if (uid) {
    return useAsyncData(`[coup_de_coeur-uid-${uid}]`, () => prismic.client.getByUID("coup_de_coeur", uid)).data
  } else {
    return useAsyncData("all_coups_de_coeur", () => prismic.client.getAllByType("coup_de_coeur")).data;
  }
}