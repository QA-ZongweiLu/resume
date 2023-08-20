<template>
  <v-lazy
    v-model="isLoaded"
    height="inherit"
    transition="fade-transition"
    :options="{ threshold: .5 }"
  >
    <v-card
      class="surface"
      flat
    >
      <v-card-title class="text-title
                          text-h4 text-center
                          text-xl-h4 text-lg-h4 text-md-h4 text-sm-h4 text-xs-h3">
        <span class="font-weight-medium pb-0">Experience</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="px-0">
        <v-container class="py-0">
          <v-timeline
            side="end"
            :density="mobile ? 'compact' : 'default'"
          >
            <v-timeline-item
              dot-color="red-darken-2"
              fill-dot
              size="small"
            >
              <template
                v-if="!mobile"
                v-slot:opposite
              >
                <span class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                             font-weight-medium mb-4 text-red-darken-2">
                  From Nov. 2022 to present
                </span>
              </template>
              <div class="py-4">
                <span
                  v-if="mobile"
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium mb-4 text-red-darken-2"
                >
                  From Nov. 2022 to present
                </span>
                <h2 class="text-xl-h4 text-lg-h4 text-md-h4 text-h6
                           font-weight-medium mb-xl-4 mb-lg-4 mb-md-4 mb-0">
                  <span class="text-red-darken-2">Trend Micro</span> | Test engineer
                </h2>
                <div class="text-subtitle-1">
                  <div class="d-flex py-2">
                    <blockquote class="font-weight-medium">
                      At TrendMicro, I learned more about testing in microservice and serverless systems. I also got better at working with teams from different countries.
                      <br /><br />Below are the tasks I encountered during my time there:
                    </blockquote>
                  </div>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Conducted e2e, integration, and regression tests for different projects
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Developed automated test scripts based on Cypress
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Developed and maintained test utilities based on Node.js
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Developed QA tools based on Python and JavaScript
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Run Scrum meetings and communicate with teams from different countries
                    </blockquote>
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="green"
              fill-dot
              size="small"
              
            >
              <template
                v-if="!mobile"
                v-slot:opposite
              >
                <span class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                             font-weight-medium mb-4 text-green">
                  From Aug. 2020 to Sep. 2022
                </span>
              </template>
              <div class="py-4">
                <span
                  v-if="mobile"
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium mb-4 text-green"
                >
                  From Aug. 2020 to Sep. 2022
                </span>
                <h2 class="text-xl-h4 text-lg-h4 text-md-h4 text-h6
                           font-weight-medium mb-xl-4 mb-lg-4 mb-md-4 mb-0">
                  <span class="text-green">ChungYo</span> | Test engineer
                </h2>
                <div class="text-subtitle-1">
                  <div class="d-flex py-2">
                    <blockquote class="font-weight-medium">
                      At ChungYo, since the project is in its initial stage, I have more opportunities to explore how to build an automated testing process from scratch.
                      <br /><br />Below are the tasks I encountered during my time there:
                    </blockquote>
                  </div>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Developed automated test scripts based on Pytest and WebDriver
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Developed a distributed test system using Docker, Django, and Redis Queue
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Maintained and integrated automated tests for different projects
                    </blockquote>
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="blue"
              fill-dot
              size="small"
            >
              <template
                v-if="!mobile"
                v-slot:opposite
              >
                <span class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                             font-weight-medium mb-4 text-blue">
                  From Jul. 2019 to Jun. 2020
                </span>
              </template>
              <div class="py-4">
                <span
                  v-if="mobile"
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium mb-4 text-blue"
                >
                  From Jul. 2019 to Jun. 2020
                </span>
                <h2 class="text-xl-h4 text-lg-h4 text-md-h4 text-h6
                           font-weight-medium mb-xl-4 mb-lg-4 mb-md-4 mb-0">
                  <span class="text-blue">Exosite</span> | QA intern
                </h2>
                <div class="text-subtitle-1">
                  <div class="d-flex py-2">
                    <blockquote class="font-weight-medium">
                      In my senior year, I was fortunate to intern at Exosite, where I first came to understand how teamwork is implemented in software engineering and why<br /><br />
                      <span
                        class="text-decoration-underline"
                        style="text-decoration-style: wavy;"
                      >
                        Quality is a value to someone who matters
                      </span>
                      <br /><br />Below are the tasks I encountered during this one-year tenure:
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Developed automated test scripts based on Robot Framework and WebDriver
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Used Jenkins for CI/CD before deployment
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Used Jira to track the progress of bugs and other tasks
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Used Docker to build different test environments
                    </blockquote>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex py-2">
                    ．
                    <blockquote class="font-weight-medium">
                      Maintained automated scripts for different projects via Git
                    </blockquote>
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item hide-dot>
              <div class="py-4">
                <h2 class="text-lg-h3 text-xl-h3 text-md-h3 text-h4
                           font-weight-medium mb-4 text-blue-grey">
                  Education
                </h2>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="blue-grey"
              fill-dot
              size="small"
            >
              <template
                v-if="!mobile"
                v-slot:opposite
              >
                <span
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium mb-4"
                  :class="theme === 'light' ? 'text-blue-grey' : ''"
                >
                  From Sep. 2016 to Jun. 2020
                </span>
              </template>
              <div class="py-4">
                <span
                  v-if="mobile"
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium mb-4"
                  :class="theme === 'light' ? 'text-blue-grey' : ''"
                >
                  From Sep. 2016 to Jun. 2020
                </span>
                <div
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium my-4"
                  :class="theme === 'light' ? 'text-blue-grey' : ''"
                >
                  National Chung Hsing University | MIS
                </div>
                <v-divider></v-divider>
                <div
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium my-4"
                  :class="theme === 'light' ? 'text-blue-grey' : ''"
                >
                  Bachelor's degree
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="blue-grey"
              fill-dot
              size="small"
            >
              <template
                v-if="!mobile"
                v-slot:opposite
              >
                <span
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium mb-4"
                  :class="theme === 'light' ? 'text-blue-grey' : ''"
                >
                  From Nov. 2013 to Jun. 2016
                </span>
              </template>
              <div class="py-4">
                <span
                  v-if="mobile"
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium mb-4"
                  :class="theme === 'light' ? 'text-blue-grey' : ''"
                >
                  From Nov. 2013 to Jun. 2016
                </span>
                <span
                  class="text-xl-h5 text-lg-h5 text-md-h5 text-h6
                         font-weight-medium my-4"
                  :class="theme === 'light' ? 'text-blue-grey' : ''"
                >
                  National Chiayi Senior High School
                </span>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-card-text>
    </v-card>
  </v-lazy>
</template>

<script>
  export default {
    name: 'Experience',

    data: () => ({
      isLoaded: true
    }),

    computed: {
      mobile () {
        return this.$vuetify.display.mobile
      },

      theme () {
        return this.$vuetify.theme.global.name
      }
    }
  }
</script>
