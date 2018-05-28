<template>
    <div>
        <h2> simple Ayah Component </h2>
        <button @click="setRandomAyah"> Random Ayah </button>
        <p>{{ayahText}}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Ayah",
  data() {
    return {
      ayahText: ""
    };
  },
  mounted() {
    let randomAyah = Math.floor(Math.random() * 6236);
    let that = this;
    axios
      .get("http://api.alquran.cloud/ayah/" + randomAyah)
      .then(function(response) {
        //console.log(response);
        that.ayahText = response["data"]["data"]["text"];
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
      that.ayahText = 'waiting for Ayah coming';

      axios
        .get("http://api.alquran.cloud/ayah/" + randomAyah)
        .then(function(response) {
          //console.log(response);
          that.ayahText = response["data"]["data"]["text"];
          console.log(this.ayahText);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

