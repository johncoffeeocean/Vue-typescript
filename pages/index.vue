<template>
  <v-row justify="center" align="center">

    <v-col cols="12" sm="12" md="12">

      <GameSection/>

    </v-col>

  </v-row>
</template>
<script>
import GameSection from "../components/GameSection/index";
export default {
  components: {GameSection}
}
</script>
