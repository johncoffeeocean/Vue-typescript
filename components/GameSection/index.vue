<template>

  <v-container md>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="3">

        <game-filter/>

      </v-col>
      <v-col cols="12" sm="8" md="9">

        <game-list v-if="gameList.games.length" :gameItems="gameList.games" />
        <v-row v-else>
          <v-col cols="12">
            <v-skeleton-loader
              class="mx-auto"
              type="card,list-item-two-line"
            ></v-skeleton-loader>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>


</template>


<script lang="ts">

import {Component, Vue} from 'nuxt-property-decorator'
import GameList from "~/components/GameSection/GameList.vue";
// import {getters, RootState} from '~/store/users'
// import {Task} from "~/types/task";


@Component({
  components: {GameList}
})

export default class GameSection extends Vue {

  public items = []

  public searchParams = {
    name: '',
    score: 0
  }

  public orderBy = {
    title: '',
    order: 'asc'
  }


  get gameList() {
    return (this.$store.state).games
  }




  computed() {
    // filterFruit()
    // {
    //   if (this.search) {
    //     return this.fruits.filter((fruit) => {
    //       return this.search.toLowerCase().split(' ').every(item => item.toLowerCase().includes(item))
    //     })
    //   } else {
    //     return this.fruits;
    //   }
    // }
  }

  mounted() {
    this.$store.dispatch('games/fetchGames')
  }


}

</script>




<style>

.games-list .card {
  margin: 20px;
}

</style>
