<template>
  <v-navigation-drawer v-model="drawer" fixed temporary right dark>
    <!-- <v-list-item>
      <v-list-item-avatar>
        
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title></v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawerValue: {
      type: Boolean,
    },
  },
  data() {
    return {
      drawer: this.drawerValue,
      fixed: false,
      right: true,
    };
  },

  watch: {
    drawer(newVal) {
      if (!newVal) {this.$emit("closeSideBar", newVal)}
    },
    drawerValue(newVal) {
      if (newVal) this.drawer = newVal;
    },
  },
};
</script>
