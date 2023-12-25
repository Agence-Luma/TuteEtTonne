export const useAccueil = () => {
  const prismic = usePrismic()
  return useAsyncData('index', () => prismic.client.getSingle('accueil', { lang: 'fr-fr' })).data
}