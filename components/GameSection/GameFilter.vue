<template>


  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card>

        <v-card-text>

          <v-form>
            <v-container>
              <v-row>

                <v-card-title>Filter results</v-card-title>

                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <h3>Name (contains)</h3>
                  <v-text-field
                    v-model="searchParams.name"
                    label=""
                    placeholder=""
                    solo-inverted

                  ></v-text-field>
                </v-col>


                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <h3>Minimum Score</h3>
                  <v-text-field
                    v-model="searchParams.score"
                    label=""
                    placeholder="1-10"
                    solo-inverted
                    type="number"
                    min="0"
                    max="10"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <h3>Order By</h3>

                  <v-row>
                    <v-col cols="3" md="4" class="pr-0">
                      <v-btn v-if="orderBy.order === 'desc'" @click="orderBy.order = 'asc'" color="blue" block height="48">
                        <v-icon v-if="true" aria-hidden="false">
                          mdi-arrow-down-thick
                        </v-icon>
                      </v-btn>
                      <v-btn v-else @click="orderBy.order = 'desc'" color="blue" block height="48">
                        <v-icon v-if="true" aria-hidden="false">
                          mdi-arrow-up-thick
                        </v-icon>
                      </v-btn>

                    </v-col>
                    <v-col cols="9" md="8" class="pl-0 ml-0">
                      <v-select
                        v-model="orderBy.title"
                        :items="orderByItems"
                        label="Standard"
                        solo-inverted

                      ></v-select>
                    </v-col>
                  </v-row>

                </v-col>


                <v-col class="d-flex justify-end">
                  <v-btn color="blue">Clear</v-btn>

                </v-col>


              </v-row>
            </v-container>


          </v-form>

        </v-card-text>




      </v-card>
    </v-col>
  </v-row>





</template>



<script lang="ts">

import {Component, Vue, Prop} from 'nuxt-property-decorator'
import {SearchParams} from "../../types/SearchParams";
import {OrderBy} from "../../types/OrderBy";


@Component
export default class GameFilter extends Vue {

  get orderByItems(){
    return ['Release date', 'Score', 'Name']
  }

  @Prop() readonly searchParams!:SearchParams
  @Prop() readonly orderBy!:OrderBy




}

</script>



<style>

.games-list .card{
  margin: 20px;
}

</style>
