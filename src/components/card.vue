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
      <div style="background-color: white">
        <v-row>
          <v-col cols="12" md="8" xl="8">
            <v-icon large style="float: left; margin-left: 1.5rem">
              mdi-bookmark-outline
            </v-icon>
            <br />
            <v-card-title style="color: rgb(127, 142, 173); font-size: 1.4rem">
              <b
                id="fnt"
                style="white-space: pre-wrap; word-break: break-word !important"
                >{{ nombre }}</b
              >
            </v-card-title>
          </v-col>
          <v-col cols="12" md="4" xl="4">
            <img
              height="75px"
              width="75px"
              src="https://cdn.worldvectorlogo.com/logos/imss-1.svg"
            />
          </v-col>
        </v-row>
      </div>
      <div
        style="margin-left: 1rem; margin-right: 1rem; margin-bottom: 0.2rem; width: 90%, height:15rem;"
      >
        <v-row>
          <div style="background-color: #d9d9d9; margin-top: 2rem">
            <v-card-subtitle style="padding:1rem 3rem 1rem 3rem;"
              ><b
                style="
                  white-space: pre-wrap;
                  word-break: break-word !important;
                  color: black;
                  text-align: left;
                  font-size: 1.1rem;
                "
                >Descripción: {{ descripcion }}</b
              >
            </v-card-subtitle>
          </div>
          <v-col cols="12" md="6" xl="6">
            <div>
              <b
                style="
                  white-space: pre-wrap;
                  word-break: break-word !important;
                  color: white;
                  float: left;
                  font-size: 1.1rem;
                "
                >ID: {{ id }} <br />
                Tiempo Restante: {{ tiempo_restante }}
              </b>
            </div>
          </v-col>
          <v-col cols="12" md="6" xl="6">
            <v-btn
              color="#D9D9D9"
              rounded
              style="margin-bottom: 0.5rem; width: auto; color: #7f8ead"
            >
              VER
            </v-btn>
            <br />
            <v-btn
              color="#D9D9D9"
              rounded
              style="margin-top: 0.5rem; width: auto; color: #7f8ead"
              ><v-icon large dark style="margin-right: 0.5rem">mdi-note-text</v-icon>
              ANáLISIS
            </v-btn>
          </v-col>
        </v-row>
      </div>

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
  background: linear-gradient(
    90deg,
    rgba(127, 142, 173, 1) 0%,
    rgba(127, 142, 173, 1) 80%
  );
}
.on-hover2 {
  color: red !important;
  background-color: blue;
}
</style>
