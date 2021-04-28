var app = new Vue({
  el: "#root",
  data: {
    cdArray: [],
  },
  method: {},
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
        const res = response.data;
        this.cdArray = res.response;
      });
  },
});
