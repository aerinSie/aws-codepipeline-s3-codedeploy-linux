var app = new Vue({
    el: '#app',
    data: {
      codeVersion:'v0.0.1',
      message: 'Hello World!',
      computedValue:'',
      afterTimeString:'',
      author:'Aerin',
      nowTimeString:'',
      baseStyles: {
        fontSize: '15px',
        textAlign: 'center'
      }
    },  
    computed: {
      nowUnixTime: {
        get: function () {
            var now = new Date();
            var x = now.getTime();
            this.nowTimeString = now.toLocaleString();
          return Math.round(x/1000)
          }
      }
    },
    methods: {
      say: function (message) {
        if(message.length>9&&message.length<11){
          var unixTime = 1000*message;
          var time = new Date(unixTime);
          this.afterTimeString = time.toLocaleString();
        }
      }
    },
    watch:{
      computedValue: function(i){
          this.say(i);
      }
    }
  
  })