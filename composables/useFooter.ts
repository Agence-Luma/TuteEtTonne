export const useFooter = () => {
  const prismic = usePrismic()
  return useAsyncData('$footer', () => prismic.client.getSingle('footer')).data
}