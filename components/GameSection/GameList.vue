<template>

  <v-lazy
    v-model="gameItems"
    :options="{
          threshold: .5,

        }"
    min-height="400"
    transition="fade-transition"
  >

    <v-row justify="center" align="center" class="games-list">


      <v-col v-for="(gameItem, gameItemKey) in gameItems" :key="gameItemKey" cols="12" sm="12" md="12">
        <v-card class="mx-auto my-3"
        >
          <v-row>
            <v-col  cols="12"  md="3"  sm="4" xs="12" class="py-0">
              <div class="black mt-0 fill-height">
                  <v-img src="" min-height="100"></v-img>
              </div>
            </v-col>

            <v-col cols="12"  md="8"  sm="7" xs="12">

              <v-card-title>{{ gameItem.name }}</v-card-title>
              <v-card-subtitle>Release date: {{ $moment(gameItem.first_release_date).format('DD/MM/YYYY') }}</v-card-subtitle>

              <v-card-text>
                <small>{{ gameItem.summary }}</small>
              </v-card-text>

            </v-col>

            <v-col  cols="12"  md="1"  sm="1" xs="12" >

              <div class="fill-height d-flex align-center" >
                <v-badge color="blue" :content="Math.round(gameItem.rating/10)" ></v-badge>
              </div>


            </v-col>

          </v-row>


        </v-card>
      </v-col>


    </v-row>

  </v-lazy>


</template>





<script lang="ts">

import {Component, Vue, Prop} from 'nuxt-property-decorator'
import {Game} from "~/types/game";


@Component
export default class GameList extends Vue {


  @Prop() readonly gameItems!:[Game]




}

</script>






<style>

.games-list .card{
  margin: 20px;
}

</style>
