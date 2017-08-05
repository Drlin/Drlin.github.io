xtag.register('x-lists', {
  content: '<input type="text" />',
  lifecycle:{
    created: function(){
      console.log(this.firstElementChild);
      // Alerts the input specified via the 'content' property
    }
  },
  methods: {
    shout: function(message){
      setTimeout(function(){
       alert(message);
      }, this.delay);
    }
  },
  accessors: {
    delay: {
      attribute: {}
    }
  },
  events: {
    tap: function(){
      this.shout(this.firstElementChild.value);
    }
  }
});