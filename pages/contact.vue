<template>

  <v-container  class="max-width-700">
    <v-row justify="center" align="center">

      <v-col>
        <h1>
          GET IN TOUCH
        </h1>
        <p>text sample</p>
      </v-col>
      <v-col cols="12" sm="12" md="12">



        <v-card>

          <v-card-text>

            <v-form>
              <v-container>
                <v-row>

                  <v-col cols="12">
                    <h2>Contact Form</h2>
                  </v-col>

                  <v-col
                    cols="6"
                    sm="12"
                    md="6"
                  >
                    <label>Name</label>
                    <v-text-field
                      label=""
                      placeholder=""
                      solo-inverted
                      type="text"
                    ></v-text-field>
                  </v-col>


                  <v-col
                    cols="6"
                    sm="12"
                    md="6"
                  >
                    <label>Email Adress</label>
                    <v-text-field
                      label=""
                      solo-inverted
                      type="email"
                    ></v-text-field>
                  </v-col>


                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <label>Message</label>
                    <v-textarea
                      label=""
                      solo-inverted
                    ></v-textarea>
                  </v-col>


                  <v-col class="d-flex justify-end">
                    <v-btn color="blue">Send</v-btn>
                  </v-col>


                </v-row>
              </v-container>


            </v-form>

          </v-card-text>




        </v-card>

      </v-col>

    </v-row>
  </v-container>

</template>



<style scoped>
  .max-width-700{
    max-width: 700px;
  }
</style>
