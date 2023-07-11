AFRAME.registerComponent("game", {
    schema : {
        gameState : {type : "string", default : "play"},
        
    },
    init : function(){
        var duration = 300;
        var timerE1 = document.querySelector("timer");
        this.startTimer(duration, timerE1);

    },
    
    startTimer : function(duration, timerE1){
        var minutes ;
        var seconds;
        setInterval(() =>{
            if(duration >= 0){
                this.data.gameState = "play";

                minutes = parseInt(duration / 60);
                seconds = parseInt(duration / 60);

                if(minutes < 10){
                    minutes = "0"+minutes;
                    
                }

                if(seconds <10){
                    seconds = "0"+ seconds
                }

            }
        })
    }
})