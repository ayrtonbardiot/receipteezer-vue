<template>
  <div>
    <div id="receipt">
      <div
        id="receptContainer"
        class="receiptContainer"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/wrinkled-paper-texture-7.jpg') + ')',
        }"
      >
        <h2 class="logo">RECEIPTEEZER</h2>
        <p class="period">ALL TIME</p>
        <p class="date">
          ORDER #0003 FOR {{ this.$store.getters.getUser.name.toUpperCase() }}
        </p>
        <p class="date">{{ this.date }}</p>
        <table class="tracks">
          <thead>
            <tr>
              <td class="begin">QTY</td>
              <td>ITEM</td>
              <td class="length">AMT</td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(traacks, index) in this.$store.getters.getTracks.data.slice(0, 10)"
              v-bind:key="traacks"
            >
              <td class="begin">{{ index + 1 }}</td>
              <td class="name">
                {{ traacks.title }} -

                <span> {{ traacks.artist.name }} </span>
              </td>
              <td class="length">{{ secondToM(traacks.duration) }}</td>
            </tr>
          </tbody>
        </table>
        <p class="date">CARD #: **** **** **** 2020</p>
        <p class="date">AUTH CODE: 123420</p>
        <p class="date">
          CARDHOLDER: {{ this.$store.getters.getUser.name.toUpperCase() }}
        </p>
        <div class="thanks">
          <p>THANK YOU FOR VISITING!</p>
          <img :src="require('@/assets/barcode.png')" />
          <p class="website">receipteezer by notaryz</p>
        </div>
      </div>
      <button class="btn time-btn" id="download" v-on:click="dlimg">
        Download Image
      </button>
    </div>
  </div>
</template>

<script>
import domtoimage from "dom-to-image";
export default {
  name: "Recep",
  data() {
    return {
      date: new Date()
        .toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .toUpperCase(),
    };
  },
  methods: {
    secondToM(d) {
      d = Number(d);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);
      return m + ":" + s;
    },
    dlimg() {
      domtoimage
        .toJpeg(document.getElementById("receptContainer"), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "receipteezer.jpeg";
          link.href = dataUrl;
          link.click();
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap");
* {
  box-sizing: border-box;
}
h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 0px;
}
h2 {
  font-size: 2.5rem;
  margin-top: 0px;
}
p {
  font-family: Helvetica, Geneva, Tahoma, sans-serif;
}
.logo {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  text-align: center;
  padding-top: 15px;
}
.info {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  text-align: center;
}
.period {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  text-align: center;
  padding-bottom: 15px;
  margin-top: -25px;
}
.container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-btn {
  margin: 2vh auto;
  text-align: center;
  text-decoration: none;
  padding: 2vh 5vh;
  background-color: #1db954;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  font-family: "Poppins", Helvetica, Geneva, Tahoma, sans-serif;
}
.time-btn {
  text-align: center;
  text-decoration: none;
  padding: 1vh 5vh;
  background-color: #0056ff;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  font-family: "Poppins", Helvetica, Geneva, Tahoma, sans-serif;
  margin: 0vh 1vh;
  width: auto;
}
.login-btn:hover {
  text-decoration: none;
  color: white;
}
#options {
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.hidden {
  display: none;
}
#loggedin,
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.date {
  margin: 0vh;
}
.tracks {
  margin: 5px 0vh;
}
#receipt {
  clear: both;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 25px auto;
}
.username-input {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2vh;
}
.username-input * {
  margin: 2%;
}
.receiptContainer {
  background-position: center;
  width: 340px;
  filter: brightness(110%);
  padding: 20px;
}
.begin {
  padding-left: 0vh;
}
#download {
  margin-top: 2vh;
  border-style: none;
}
p,
table,
.date {
  font-family: "Anonymous Pro", "Courier New", Courier, monospace;
}
table {
  border: none;
}
.total-counts {
  border-top: 1px dashed;
}
.total-counts-end {
  border-bottom: 1px dashed;
}
thead {
  border-top: 1px dashed;
  border-bottom: 1px dashed;
}
td {
  padding: 2px 10px;
  vertical-align: top;
}
.name {
  width: 225px;
  overflow: auto;
}
.length {
  text-align: right;
  padding-left: 10px;
  padding-right: 0px;
}
.website {
  margin-bottom: 0px;
}
.thanks {
  text-align: center;
  padding: 15px 0px;
}
.thanks img {
  width: 70%;
}
@media only screen and (min-width: 768px) and (max-width: 1280px) {
  #loggedin,
  #login {
    width: 100%;
  }
  .container {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  #options {
    flex-direction: column;
  }
  #loggedin,
  #login {
    width: 100%;
  }
  .time-btn {
    margin: 1vh auto;
  }
  .container {
    width: 100%;
  }
}
</style>