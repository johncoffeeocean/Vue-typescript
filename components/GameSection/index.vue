<template>

  <v-container md>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="3">

        <game-filter :searchParams="searchParams" :orderBy="orderBy"/>

      </v-col>
      <v-col cols="12" sm="8" md="9">

        <game-list v-if="filteredGames.length" :gameItems="filteredGames" />
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
import {Game} from "~/types/game";
import {OrderBy} from "~/types/OrderBy";
import {SearchParams} from "~/types/SearchParams";


@Component({
  components: {GameList}
})

export default class GameSection extends Vue {


  public searchParams:SearchParams = {
    name: '',
    score: 0
  }

  public orderBy:OrderBy = {
    title: '',
    order: 'asc'
  }


  get gameList():[Game] {
    return (this.$store.state).games
  }


    get filteredGames()
    {
      return  this.filterByName(this.filterByScore(this.gameList.games))
    }

    public filterByName<T>(gameItems:[T]):[T]{
      if (this.searchParams.name)
        return gameItems.filter((game:Game) =>
           (this.searchParams.name.toLowerCase().split(' ').every(item => game.name.toLowerCase().includes(item))))
      else
        return gameItems;
    }

  public filterByScore<T>(gameItems:[T]):[T]{
    if (this.searchParams.score)
      return gameItems.filter((game:Game) =>
        (game.rating/10 >= this.searchParams.score))
    else
      return gameItems;
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
