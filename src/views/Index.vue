<template>
  <div id="index">
    <h1>Receipteezer</h1>
    <button v-if="this.$store.getters.btnlgn" v-on:click="login">
      Connexion
    </button>
  </div>
</template>

<script>
/*global DZ*/
import store from "../store/index";
import router from "../router/index";
export default {
  name: "Index",
  methods: {
    login() {
      DZ.login(
        function (response) {
          if (response.status != null) {
            DZ.api("/user/me", function (response) {
              store.commit("setUser", response);
            });
            DZ.api("user/me/charts/tracks", (data) => {
              store.commit("setTracks", data);
              router.push({ name: "Recep" });
              store.commit("changeButton");
            });
          } else {
            alert("Can't connect to your profile ! Please retry later.");
          }
        },
        { perms: "basic_access" }
      );
    },
  },
};
</script>

<style scoped>
</style>