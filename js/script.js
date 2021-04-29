var app = new Vue({
  el: "#root",
  data: {
    cdArray: [],
    genreArray: [],
    genreSelect: "",
  },
  methods: {},
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
        const res = response.data;
        this.cdArray = res.response;

        // Sort CD Array by year.
        this.cdArray.sort((a, b) => {
          return parseInt(a.year) - parseInt(b.year);
        });

        // Create an array of genres.
        this.cdArray.forEach((cd) => {
          if (!this.genreArray.includes(cd.genre)) {
            this.genreArray.push(cd.genre);
          }
        });
      });
  },
});
