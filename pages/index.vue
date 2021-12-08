<template>
  <v-row justify="center" align="center">

    <v-col cols="12" sm="12" md="12">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" md="3">

            <game-filter/>

          </v-col>
          <v-col cols="12" sm="8" md="9">

            <game-list/>

          </v-col>
        </v-row>
      </v-container>
    </v-col>

  </v-row>
</template>
<script>
import GameList from "../components/GameList";
import GameFilter from "../components/GameFilter";
export default {
  components: {GameFilter, GameList}
}
</script>
