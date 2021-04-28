var app = new Vue({
  el: "#root",
  data: {
    cdArray: [],
    genreArray: [],
    genreSelect: "",
  },
  methods: {
    musicGenres(array) {
      for (let i = 0; i < array.length; i++) {
        if (!this.genreArray.includes(array[i].genre)) {
          this.genreArray.push(array[i].genre);
        }
      }
    },
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
      });
  },
  beforeUpdate() {
    this.sortByYear(this.cdArray);
  },
  updated() {
    this.musicGenres(this.cdArray);
  },
});
