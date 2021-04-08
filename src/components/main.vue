<template>
  <v-app id="backGND">
    <NBar />
    <v-card
      
      style="padding-left: 2rem; background-color: transparent"
    >
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          xl="6"
          sm="6"
          v-for="item in APIarray"
          :key="item.id_simplicita"
        >
          <Card
            :nombre="item.institucion"
            :descripcion="item.desc_exp"
            :id="item.id_simplicita"
            :tiempo_restante="item.plazo"
          ></Card>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>
<script>
import NBar from "@/components/navbar";
import Card from "@/components/card";
export default {
  components: { NBar, Card },
  data() {
    return {
      APIarray: [],
    };
  },
  methods: {},
  mounted: async function () {
    await fetch("https://simplicita.tk:8000/buscar/medicina")
      .then((response) => response.json())
      .then((data) => 
        data.forEach(element => {
            this.APIarray.push(element);
        })
      );

      console.log("APIARRAY", this.APIarray);
      
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
