<template>
  <v-container
    class="pa-0"
    fluid
  >
    <v-row no-gutters>
      <v-col class="d-flex justify-center align-center">
        <v-slide-x-reverse-transition>
          <v-card
            v-show="mounted"
            class="d-flex flex-column"
            color="surface"
            flat
            :height="surfaceHeight"
            :max-height="surfaceHeight"
            :rounded="mobile ? '' : 'xl'"
            :width="surfaceWidth"
          >
            <v-card-actions
              class="justify-end pb-0"
              ref="header"
            >
              <ThemeSwitcher />
            </v-card-actions>
            <v-card-text
              v-scroll.self="onScroll"
              class="overflow-y-auto py-0"
            >
              <v-container
                class="h-100 pa-0"
                fluid
              >
                <v-row
                  class="h-100"
                  no-gutters
                >
                  <v-col class="h-100">
                    <Home       ref="page-home" />
                    <TechSkill  ref="page-techskill" />
                    <SoftSkill  ref="page-softskill" />
                    <Experience ref="page-experience" />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions
              class="justify-center py-0"
              ref="footer"
            >
              <v-btn
                icon="mdi-chevron-down"
                :style="{ transform: `rotate(${isLastPage ? 180 : 0}deg)` }"
                @click="nextPage"
              />
            </v-card-actions>
          </v-card>
        </v-slide-x-reverse-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ThemeSwitcher from '@/components/utils/ThemeSwitcher.vue'
  import Home from '@/components/pages/Home.vue'
  import TechSkill from '@/components/pages/TechSkill.vue'
  import SoftSkill from '@/components/pages/SoftSkill.vue'
  import Experience from '@/components/pages/Experience.vue'

  export default {
    name: 'Resume',

    components: {
      ThemeSwitcher,
      Home,
      TechSkill,
      SoftSkill,
      Experience
    },

    data: () => ({
      mounted: false,
      pages: [],
      pagesBottom: [],
      currentPage: ''
    }),

    computed: {
      mobile () {
        return this.$vuetify.display.mobile
      },

      surfaceHeight () {
        return `${window.innerHeight - (this.mobile ? 0 : 48)}px`
      },

      surfaceWidth () {
        return `${window.innerWidth - (this.mobile ? 0 : 48)}px`
      },

      isLastPage () {
        return this.currentPage === this.pages[this.pages.length - 1]
      }
    },

    mounted () {
      this.pages = Object.keys(this.$refs).filter(key => key.startsWith('page-'))
      this.currentPage = this.pages.length > 0 ? this.pages[0] : ''

      const header = this.$refs.header.$el
      const footer = this.$refs.footer.$el
      this.pagesBottom = this.pages.map(page => {
        const el = this.$refs[page].$el
        const rect = el.getBoundingClientRect()
        const offsetTop = rect.top + window.scrollY
        return offsetTop + rect.height - header.offsetHeight - footer.offsetHeight
      })

      this.$nextTick(() => this.mounted = true)
    },

    methods: {
      onScroll (e) {
        for (const bottom of this.pagesBottom) {
          if (e.target.scrollTop < bottom) {
            const index = this.pagesBottom.indexOf(bottom)
            this.currentPage = this.pages[index]
            break
          }
        }
      },

      nextPage () {
        if (this.currentPage === '') return

        const index = this.pages.indexOf(this.currentPage)
        const nextPage = this.pages[(index + 1) % this.pages.length]

        this.$refs[nextPage].$el.scrollIntoView({ behavior: 'smooth' })
      },
    }
  }
</script>
