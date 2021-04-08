<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card
      elevation="25"
      :class="{ 'on-hover2': hover }"
      class="blue-grad"
      style="
        margin: 1rem;
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
        border-bottom-left-radius: 5rem;
        border-bottom-right-radius: 5rem;
      "
      max-width="700"
    >
      <v-row>
        <v-col cols="12" md="8" xl="8">
            <v-icon> mdi-twitter </v-icon>
          <v-card-title style="color: red; font-size: 1.4rem">
            <b style="white-space: pre-wrap; word-break: break-word !important">{{
              nombre
            }}</b>
          </v-card-title>
          <v-card-subtitle style="padding: 0rem; margin-top: 0.3rem"
            ><b
              style="
                white-space: pre-wrap;
                word-break: break-word !important;
                color: #d2d3c9;
                text-align: left;
                font-size: 1.1rem;
              "
              >{{ descripcion }}</b
            >
          </v-card-subtitle>
         
        </v-col>
       
      </v-row>

      <div
        style="margin-left: 1rem; margin-right: 1rem; margin-bottom: 0.2rem; width: 90%"
      ></div>
      <br />
      <v-spacer></v-spacer>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    nombre: String,
    descripcion: String,
    id: Number,
    tiempo_restante: String,
  },
  data() {},
};
</script>
<style>
.blue-grad {
  background: rgb(127, 142, 173);
  background: linear-gradient(90deg, rgba(127, 142, 173, 1) 0%, rgba(8, 98, 95, 1) 80%);
}
.on-hover2 {
  color: red !important;
  background-color: blue;
}
</style>
