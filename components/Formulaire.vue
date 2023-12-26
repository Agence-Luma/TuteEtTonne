<script setup lang="ts">
const props = defineProps({
  formulaire: {
    type: Object,
    required: true,
  },
});

const prismic = usePrismic()
const { data: form } = useAsyncData('$formulaire_de_contact', () => prismic.client.getByUID("formulaire_de_contact", props.formulaire.uid));

const parametres = useParametres();

const name = ref("");
const mail = ref("");
const object = ref("");
const message = ref("");
const categorie = computed(() => form.value?.data.categories[0]?.categorie);

const submitForm = async () => {
  if (name.value === "") {
    showNotif("Veuillez renseigner votre nom.");
    return;
  } else if (mail.value === "") {
    showNotif("Veuillez renseigner votre email.");
    return;
  } else if (object.value === "") {
    showNotif("Veuillez renseigner l'objet de votre message.");
    return;
  } else if (message.value === "") {
    showNotif("Veuillez renseigner votre message.");
    return;
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: parametres.value?.data.cle_web3forms,
      name: name.value,
      email: mail.value,
      message: message.value,
      from_name: parametres.value?.data.titre_du_site,
      subject: `[${categorie.value}] ${object.value}`
    }),
  });

  const result = await response.json();
  if (result.success) {
    showNotif("Votre message a bien été envoyé !", 10000, true);
    name.value = "";
    mail.value = "";
    object.value = "";
    message.value = "";
    categorie.value = form.value?.data.categories[0]?.categorie;
  } else {
    showNotif("Une erreur est survenue: " + result.message, 10000);
  }
};

const notif = ref<HTMLElement | null>(null);
const notifMsg = ref("");
const notifShow = ref(false);
const notifSuccess = ref(false);

const showNotif = (msg: string, time = 5000, success = false) => {
  notifMsg.value = msg;
  notifShow.value = true;
  notifSuccess.value = success;
  setTimeout(() => {
  notifShow.value = false;
  }, time);
};
</script>

<template>
  <div
    v-if="form"
    class="flex flex-col items-center justify-center gap-32 py-s mb-s"
    v-bind="$attrs"
  >
    <TitreDouble
      v-if="form.data.titre_premiere_ligne && form.data.titre_deuxieme_ligne"
      :premiere-ligne="form.data.titre_premiere_ligne"
      :deuxieme-ligne="form.data.titre_deuxieme_ligne"
    />
    <h1 v-else>
      {{ form.data.titre_premiere_ligne || form.data.titre_deuxieme_ligne }}
    </h1>
    <form
      class="flex flex-col w-full gap-32"
      @submit.prevent="submitForm"
    >
      <div class="flex justify-between gap-32">
        <input
          v-model="name"
          type="text"
          name="name"
          placeholder="Nom"
          class="bg-gray-100 p-16 rounded-lg outline-0 border border-transparent focus:bg-transparent focus:border-gray-500 w-full transition-all"
        >
        <input
          v-model="mail"
          type="email"
          name="email"
          placeholder="Email"
          class="bg-gray-100 p-16 rounded-lg outline-0 border border-transparent focus:bg-transparent focus:border-gray-500 w-full transition-all"
        >
      </div>
      <select
        v-model="categorie"
        class="bg-black text-white p-16 rounded-lg outline-0 hover:cursor-pointer"
      >
        <option
          v-for="(cat, i) in form.data.categories"
          :key="cat.categorie || i"
          :value="cat.categorie"
          :selected="i === 0"
        >
          {{ cat.categorie }}
        </option>
      </select>
      <input
        v-model="object"
        type="text"
        name="object"
        placeholder="Objet"
        class="bg-gray-100 p-16 rounded-lg outline-0 border border-transparent focus:bg-transparent focus:border-gray-500 transition-all"
      >
      <textarea
        v-model="message"
        name="message"
        placeholder="Message"
        rows="5"
        class="bg-gray-100 p-16 rounded-lg outline-0 border border-transparent focus:bg-transparent focus:border-gray-500 resize-none transition-all"
      />
      <input
        type="checkbox"
        name="botcheck"
        class="hidden"
        style="display: none"
      >
      <button
        type="submit"
        class="bg-black text-white px-64 py-8 rounded-lg outline-0 self-center border border-transparent active:bg-transparent active:border-black active:text-black"
      >
        Envoyer
      </button>
    </form>
  </div>
  <div
    ref="notif"
    class="fixed bottom-64 right-64 p-16 rounded-lg z-20 border-2 font-bold opacity-0 transition-all w-[400px]"
    :class="{
      'opacity-100': notifShow,
      'border-green-100 text-green-400 bg-green-50': notifSuccess,
      'border-red-100 text-red-400 bg-red-50': !notifSuccess,
    }"
  >
    {{ notifMsg }}
  </div>
</template>

<style scoped>
select {
  appearance: none;
  -webkit-appearance: none;
  background: url("/images/arrow-white.png") no-repeat right #000;
  background-position-x: calc(100% - 16px);
}
</style>
