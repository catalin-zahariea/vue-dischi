var app = new Vue({
  el: "#root",
  data: {
    cdArray: [],
    genreArray: [],
    genreSelect: "",
  },
  methods: {
    sortByYear(array) {
      array.sort(function (a, b) {
        console.log(array);
        return parseInt(a.year) - parseInt(b.year);
      });
    },
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
        const res = response.data;
        this.cdArray = res.response;

        this.cdArray.forEach((cd) => {
          if (!this.genreArray.includes(cd.genre)) {
            this.genreArray.push(cd.genre);
          }
        });
      });
    this.sortByYear(this.cdArray);
  },
});
