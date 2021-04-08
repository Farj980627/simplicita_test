<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card
      elevation="25"
      :class="{ 'on-hover2': hover }"
      class="blue-grad"
      style="margin: 1rem,
       border-top-left-radius: 2.5rem;
        border-top-right-radius: 5rem;
        border-bottom-left-radius: 2.5rem;
        border-bottom-right-radius: 5rem;
        margin-bottom:2rem;
        "
      max-width="700"
    >
      <v-row>
        <v-col cols="12" md="6" xl="6">
          <img
            height="75px"
            width="75px"
            src="https://cdn.worldvectorlogo.com/logos/imss-1.svg"
          />
          <v-divider />
          <v-card-title style="color: #8b6792; font-size: 1.4rem">
            <b style="white-space: pre-wrap; word-break: break-word !important">{{
              nombre
            }}</b>
          </v-card-title>
          <v-spacer />
           <div style="background-color: #BFBFBF; margin-top: 2rem; margin-left:1rem; border-radius:1rem;">
            <v-card-subtitle  style="padding: 0rem; padding-top: 0.5rem; padding-bottom:0.5rem; "
              ><b
                style="
                  white-space: pre-wrap;
                  word-break: break-word !important;
                  color: white;
                  text-align: left;
                  font-size: 1.1rem;
                "
                >ID: {{ id }}</b
              >
            </v-card-subtitle>
          </div>
          <v-card-subtitle style="padding: 0rem; margin-top: 0.3rem"
            ><b
              style="
                white-space: pre-wrap;
                word-break: break-word !important;
                color: #8b6792;
                text-align: left;
                font-size: 1.1rem;
              "
              >{{ master }}</b
            >
          </v-card-subtitle>
        </v-col>
        <v-col style="padding: 2rem; padding-right: 2.5rem" cols="12" md="6" xl="6">
          <v-img class="rounded" :src="img" height="200px"></v-img>
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
  data() {
    return {};
  },
};
</script>
<style scoped>
.blue-grad {
  background: rgb(127, 142, 173);
  background: linear-gradient(90deg, rgb(254, 254, 255) 50%, rgba(139, 103, 146, 1) 50%);
}
.on-hover2 {
  color: red !important;
  background-color: blue;
}
.theme--light.v-divider {
  border-color: rgba(139, 103, 146, 1) !important;
}
</style>
