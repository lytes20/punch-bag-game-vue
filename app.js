new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function() {
      console.log("Punch");
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      console.log("Restart");
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {}
});
