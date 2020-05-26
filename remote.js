var lirc_node = require('lirc_node');
lirc_node.init();

var remotecontrol = {
  on_noswing : function(){
 remote("BTN_18_ON_NO_SWING");
 },

  on_swing : function() {
  remote("BTN_18_ON_SWING");
 },

  off_noswing : function() {
 remote("BTN_18_OFF_NO_SWING");  
},
  off_swing : function() {
	remote("BTN_18_OFF_SWING");
  }  

};

function remote(cmd) {
  lirc_node.irsend.send_once("my-ac", cmd, function() {
    console.log(cmd);
  });
}

module.exports = remotecontrol;


