<template>
  <div class="text-center">
    <v-menu :close-on-click="closeOnClick">
      <template v-slot:activator="{ on, attrs }">
        <p class="iconLable2" :style="{color: textColor}" v-bind="attrs" v-on="on">{{ selectedLanguage }}</p>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title class="langOptions" @click.prevent="setLocale(item.value)">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: null
    }
  },
  data: () => ({
    items: [
      { title: "English", value: "en" },
      { title: "Farsi", value: "fa" },
      { title: "French", value: "fr" },
    ],
    closeOnClick: true,
  }),
  computed: {
    selectedLanguage() {
      let language = null;
      language = this.items.find((i) => {
        return i.value == this.$route.params.lang;
      });
      return language.title;
    },
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      window.location.reload(true);
    },
  },
};
</script>
<style scoped>
.iconLable2 {
  font-size: 13px;
  line-height: 1;
}
.langOptions{
  cursor: pointer;
}
</style>