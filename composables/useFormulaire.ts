export const useFormulaire = (uid: string) => {
  const prismic = usePrismic()
  return useAsyncData('$formulaire_de_contact', () => prismic.client.getByUID("formulaire_de_contact", uid)).data
}