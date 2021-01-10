<template>
  <div id="app">
    <link
      href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
    <div id="dz-root" style-="display: none"></div>
    <router-view />
    <br />
    <footer>
      Receipteezer by <a href="https://github.com/notaryzw3b">notaryz</a>, idea
      from <a href="https://michellexliu.github.io/">Michelle Liu</a>
    </footer>
  </div>
</template>

<script>
/* global DZ*/
export default {
  name: "App",
  mounted() {
    window.dzAsyncInit = () => {
      this.init();
    };
    (() => {
      var e = document.createElement("script");
      e.src = "https://e-cdns-files.dzcdn.net/js/min/dz.js";
      e.async = true;
      document.getElementById("dz-root").appendChild(e);
    })();
  },
  methods: {
    init() {
      DZ.init({
        appId: "455862",
        channelUrl: "https://wati-shop.fr/channel.php",
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
