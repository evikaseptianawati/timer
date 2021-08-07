feather.replace();

const app = new Vue({
  el: '#app',
  data: {
    timer: null,
    totalTime: (25 * 60),
    resetButton: false,
    title: "Countdown to rest time!",
    edit: false,
    userTime: 25,
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
      this.resetButton = true;
      this.edit = false;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (this.userTime * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    editTimer: function() {
      this.edit = !this.edit;
    },
    padTime: function(time){
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.totalTime--;
    }
  },
  computed: {
    minutes: function(){
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
})