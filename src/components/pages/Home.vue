<template>
  <v-card
    flat
    color="surface"
    :height="pageHeight"
  >
    <v-container
      fluid
      class="h-100"
    >
      <v-row
        class="h-100 align-center justify-center"
        no-gutters
      >
        <v-col cols="12">
          <v-card-title class="text-center">
            <v-avatar size="210">
              <v-img cover src="@/assets/images/avatar.jpg" />
            </v-avatar>
          </v-card-title>
          <v-card-title class="text-title
                               text-h4
                               text-xl-h4 text-lg-h4 text-md-h4 text-sm-h4 text-xs-h3
                               text-center">
            Steve Lu
          </v-card-title>
          <v-card-title class="text-subtitle
                               text-xl-h5 text-lg-h5 text-md-h5
                               text-sm-h6 text-xs-h6 text-center
                               font-weight-bold">
            3 years in QA
          </v-card-title>
          <br />
          <v-card-text class="text-subtitle
                              text-xl-h5 text-lg-h5 text-md-h5
                              text-sm-h6 text-xs-h6 text-center
                              font-weight-medium" style="line-height: 150%;">
            As a test engineer, I view coding as a craft, <br />
            and strive to perfect it like an artisan!
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'Home',

    computed: {
      pageHeight () {
        return this.$vuetify.display.mobile ? 'auto' : 'inherit'
      }
    }
  }
</script>
