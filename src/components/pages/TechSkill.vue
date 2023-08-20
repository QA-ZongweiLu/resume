<template>
  <v-lazy
    v-model="isLoaded"
    transition="fade-transition"
    :height="pageHeight"
    :options="{ threshold: .5 }"
  >
    <v-card
      color="surface"
      flat
    >
      <v-card-title class="text-title
                            text-h4 text-center
                            text-xl-h4 text-lg-h4
                            text-md-h4 text-sm-h4 text-xs-h3">
        <span class="font-weight-medium">Technical skills</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(tech, techIndex) in techStack"
              :key="techIndex"
              cols="12"
              xs="12"
              sm="12"
              lg="4"
              md="4"
              xl="4"
            >
              <v-card-text class="text-title
                                  text-h6 text-xl-h5
                                  text-lg-h5 text-md-h5
                                  text-center text-xl-left
                                  text-lg-left text-md-left">
                <span
                  class="font-weight-bold"
                  :class="[`text-${tech.bgColor}`]"
                >
                  {{ tech.title }}
                </span>
              </v-card-text>
              <v-container
                class="pr-xl-0 pr-lg-0 pr-md-0 py-sm-0 py-xs-0"
                fluid
              >
                <v-row
                  v-for="item in tech.items"
                  :key="item.name"
                  class="text-h6 font-weight-bold"
                  no-gutters
                >
                  <v-col
                    align-self="center"
                    class="text-center text-xl-left text-lg-left text-md-left"
                    cols="12"
                    xs="12"
                    sm="12"
                    lg="4"
                    md="4"
                    xl="4"
                  >
                    <span>{{ item.name }}</span>
                  </v-col>
                  <v-col class="text-center text-xl-left text-lg-left text-md-left">
                    <v-rating
                      v-model="item.rating"
                      class="ma-2"
                      half-increments
                      readonly
                      :color="tech.bgColor"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-lazy>
</template>

<script>
  export 
  default {
    name: 'TechSkill',

    data: () => ({
      isLoaded: true,
      techStack: [
        {
          title: 'Programming proficiency',
          bgColor: 'purple',
          items: [
            {
              name: 'Python',
              rating: 4.5
            },
            {
              name: 'JavaScript',
              rating: 4
            }
          ]
        },
        {
          title: 'Testing proficiency',
          bgColor: 'green',
          items: [
            {
              name: 'Automation',
              rating: 4.5
            },
            {
              name: 'Manual',
              rating: 3.5
            }
          ]
        },
        {
          title: 'Cloud proficiency',
          bgColor: 'blue-lighten-1',
          items: [
            {
              name: 'AWS',
              rating: 4
            },
            {
              name: 'Azure',
              rating: 3.5
            },
            {
              name: 'GCP',
              rating: 3
            }
          ]
        }
      ]
    }),

    computed: {
      pageHeight () {
        return this.$vuetify.display.mobile ? 'auto' : 'inherit'
      }
    }
  }
</script>
