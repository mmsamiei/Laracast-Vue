<template>
    <div>
        <h2> simple Ayah Component </h2>
        <button @click="setRandomAyah"> Random Ayah </button>
        <Box>
          <div slot="title">{{surah}}</div>
          <div slot="body">{{ayahText}}</div>
        </Box>
    </div>
</template>

<script>
import axios from "axios";
import Box from "./Box.vue";
export default {
  name: "Ayah",
  components: { Box },
  data() {
    return {
      ayahText: "",
      surah: ""
    };
  },
  mounted() {
    let randomAyah = Math.floor(Math.random() * 6236);
    let that = this;
    axios
      .get("http://api.alquran.cloud/ayah/" + randomAyah)
      .then(function(response) {
        that.ayahText = response["data"]["data"]["text"];
        that.surah = response["data"]["data"]["surah"]["name"];
        console.log(this.ayahText);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    setRandomAyah() {
      let randomAyah = Math.floor(Math.random() * 6236);
      let that = this;
      that.ayahText = "waiting for Ayah";

      axios
        .get("http://api.alquran.cloud/ayah/" + randomAyah)
        .then(function(response) {
          //console.log(response);
          that.ayahText = response["data"]["data"]["text"];
          that.surah = response["data"]["data"]["surah"]["name"];
          console.log(that.surah);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

