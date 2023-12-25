export const useParametres = () => {
  const prismic = usePrismic()
  return useAsyncData('$parametres', () => prismic.client.getSingle('parametres')).data
}