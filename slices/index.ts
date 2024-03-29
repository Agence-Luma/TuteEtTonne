// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  assemblage: defineAsyncComponent(() => import("./Assemblage/index.vue")),
  avis: defineAsyncComponent(() => import("./Avis/index.vue")),
  foire_aux_questions: defineAsyncComponent(
    () => import("./FoireAuxQuestions/index.vue"),
  ),
  grille_images: defineAsyncComponent(() => import("./GrilleImages/index.vue")),
  grille_images_titres: defineAsyncComponent(
    () => import("./GrilleImagesTitres/index.vue"),
  ),
  image_pleine_largeur: defineAsyncComponent(
    () => import("./ImagePleineLargeur/index.vue"),
  ),
  image_texte: defineAsyncComponent(() => import("./ImageTexte/index.vue")),
  images_simples: defineAsyncComponent(
    () => import("./ImagesSimples/index.vue"),
  ),
  paragraphe: defineAsyncComponent(() => import("./Paragraphe/index.vue")),
  recommandation: defineAsyncComponent(
    () => import("./Recommandation/index.vue"),
  ),
  tarifs: defineAsyncComponent(() => import("./Tarifs/index.vue")),
  texte_carousel: defineAsyncComponent(
    () => import("./TexteCarousel/index.vue"),
  ),
  texte_cartes_grille: defineAsyncComponent(
    () => import("./CoupsDeCoeur/index.vue"),
  ),
  texte_cartes_verticales: defineAsyncComponent(
    () => import("./TexteCartesVerticales/index.vue"),
  ),
  texte_image_large: defineAsyncComponent(
    () => import("./TexteImageLarge/index.vue"),
  ),
  titre: defineAsyncComponent(() => import("./Titre/index.vue")),
});
