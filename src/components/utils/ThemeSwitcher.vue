<template>
  <v-card
    color="surface"
    flat
  >
    <v-card
      color="surface"
      flat
    >
      <v-card-actions>
        <v-btn
          class="mx-2"
          icon="mdi-white-balance-sunny"
          min-width="0"
          :active="!$vuetify.theme.current.dark"
          @click="toggleTheme('light')"
        />
        <v-btn
          class="mx-2"
          icon="mdi-weather-night"
          min-width="0"
          :active="$vuetify.theme.current.dark"
          @click="toggleTheme('dark')"
        />
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
  export default {
    name: 'ThemeSwitcher',

    methods: {
      toggleTheme (theme) {
        this.$vuetify.theme.global.name = theme
      }
    }
  }
</script>
