<template>
  <v-navigation-drawer
    permanent
    theme="light"
  >
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        to="/buyer"
      />
      <v-list-item
        v-if="accountStore.isLoggedIn"
        prepend-icon="mdi-cart"
        title="My Orders"
        to="/buyer/cart"
      />
      <v-list-item
        prepend-icon="mdi-heart"
        title="Favourites"
        to="/buyer/favourites"
      />
      <v-list-item
        prepend-icon="mdi-palette"
        title="Art Styles"
        @click="openDialog"
      />
      <v-list-item
        prepend-icon="mdi-account-music"
        title="Artists"
        to="/buyer/artists"
      />
    </v-list>
  </v-navigation-drawer>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      max-width="50%"
    >
      <v-card
        prepend-icon="mdi-palette"
        text="Choose your art style and subjects"
        title="Art Styles & Subjects"
      >
        <v-row>
          <v-col
            cols="6"
            class="text-center d-flex flex-column align-center justify-center"
          >
            <h1>Art Styles</h1>
            <v-radio-group v-model="artStylesModel">
              <v-list>
                <v-list-item
                  v-for="item in artStyles"
                  :key="item.name"
                >
                  <div class="d-flex flex-row align-center">
                    <v-radio
                      :label="item.name"
                      :value="item.name"
                      class="d-inline d-flex"
                    />
                  </div>
                </v-list-item>
              </v-list>
            </v-radio-group>
          </v-col>
          <v-col cols="6">
            <h1>Art Subjects</h1>
            <v-list>
              <v-list-item
                v-for="item in artSubjects"
                :key="item"
              >
                <div class="d-flex flex-row align-center">
                  <v-checkbox
                    v-model="item.selected"
                    class="d-inline d-flex"
                  />
                  <v-label class="d-inline">
                    {{ item.name }}
                  </v-label>
                </div>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <template #actions>
          <v-btn
            class="ms-auto"
            text="Apply Filter"
            @click="dialog = false"
          />
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {useFiltersStore} from "@/stores/filters.js";
import {useAccountStore} from "@/stores/account.js";

export default {
  name: "BuyerNavBar",
  setup() {
    return {
      filterStore: useFiltersStore(),
      accountStore: useAccountStore()
    }
  },
  data() {
    return {
      dialog: false,
      artSubjects: [
        {
          name: "Landscapes",
          value: "landscape",
          selected: false,
        },
        {
          name: "Florals and Plants",
          value: "plants",
          selected: false,
        },
        {
          name: "Abstract",
          value: "abstract",
          selected: false,
        },
        {
          name: "Animals",
          value: "animals",
          selected: false,
        },
        {
          name: "Portraits",
          value: "portraits",
          selected: false,
        },
        {
          name: "Vintage",
          value: "vintage",
          selected: false,
        },
        {
          name: "Architecture",
          value: "architecture",
          selected: false,
        },
        {
          name: "Black & White",
          value: "bw",
          selected: false,
        },
      ],
      artStylesModel: "All",
      artStyles: [
        {
          name: "All",
        },
        {
          name: "Paintings",
        },
        {
          name: "Digital Art",
        },
        {
          name: "Photography",
        },
      ]
    }
  },
  watch: {
    "artStylesModel": {
      handler(newValue, _a) {
        this.filterStore.selectStyle(newValue)
      },
    },
    "artSubjects": {
      handler(newValue, _) {
        for (let item of newValue) {
          if (item.selected) {
            this.filterStore.addSubjectFilter(item.value)
          } else {
            this.filterStore.removeSubjectFilter(item.value)
          }
        }
      },
      deep: true
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    }
  }
}

</script>

<style scoped>

</style>
