<template>
  <v-app id="backGND">
    <!--Un navBar arriba de la pagina -->
    <div style="padding-top: 1.5rem">
      <v-app-bar app color="#86648D" dark>
        <v-btn @click="flag = !flag" large color="#7F8EAD" style="margin-right: 0.5rem">
          Vigentes</v-btn
        >
        <v-btn @click="flag = !flag" large color="#9BA7BF">Historico</v-btn>

        <v-spacer />
        <span>1/200 Oportunidades </span>
        <v-spacer />
        <v-select v-model="itemMod" :items="itemList">
          <template v-slot:selection="{ item }">
            <span style="color: white; text-align: center; width: 100%">{{
              item
            }}</span>
          </template>
        </v-select>
      </v-app-bar>
    </div>

    <v-card style="padding-left: 2rem; background-color: transparent">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="4"
          xl="4"
          sm="4"
          v-for="item in APIarray"
          :key="item.id_simplicita"
        >
          <!--Rendeerizado de VIGENTES-->
          <Card
            v-if="!flag"
            :nombre="item.institucion"
            :descripcion="item.desc_exp"
            :id="item.id_simplicita"
            :tiempo_restante="item.plazo"
          ></Card>
          <!--Rendeerizado de HISTORICO -->
          <Card2
            v-else
            :nombre="item.institucion"
            :descripcion="item.desc_exp"
            :id="item.id_simplicita"
            :tiempo_restante="item.plazo"
          ></Card2>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>
<script>
import Card from "@/components/card";
import Card2 from "@/components/card2";

export default {
  components: { Card, Card2 },

  data() {
    return {
      APIarray: [],
      flag: false,
      itemMod: "Ordenar por: Plazo Descendente",
      itemList: ["Ordenar por: Plazo Descendente", "Ordenar por: Plazo Ascendente"],
    };
  },
  methods: {},
  //Metodo para traer la informacion del API, en este caso solo se extraen los primeros 6 resultados por temas de rapidez
  // sin embargo esta comentado el ciclo en caso de querer extraer todos los resultados que arroja el API
  created: async function () {
    await fetch("https://simplicita.tk:8000/buscar/medicina")
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0; i < 6; i++) {
          this.APIarray.push(data[i]);
        }
        /*data.forEach((element) => {
          this.APIarray.push(element);
        })*/
      });
  },
};
</script>

<style scoped>
#backGND {
  background-image: url("../assets/back.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
