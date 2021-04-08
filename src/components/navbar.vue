<template>
  <div>
    <v-app-bar app color="#0e918c" dark>
      <v-btn>Vigentes</v-btn>
      <v-btn>Historico</v-btn>
      <v-spacer />
      <span>1/20 Oportunidades </span>
      <v-spacer />
      <v-select v-model="itemMod" :items="itemList">
        <template v-slot:selection="{ item }">
          <span style="color: black; text-align: center; width: 100%">{{ item }}</span>
        </template>
      </v-select>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemMod: "Ordenar por: Plazo Descendente",
      itemList: ["Ordenar por: Plazo Descendente", "Ordenar por: Plazo Ascendente"],
    };
  },
};
</script>
<style scoped></style>
