const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    Q1:  Symbol("Q1"),
    Q2: Symbol("Q2")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        var answer = "soccer";
        var count = -1;
        var hints = ["its a sport","you play it", "its about balls"];

        switch(this.stateCur){
            case GameState.WELCOMING:
                 sReply = "Guess what am I thinking?";
                this.stateCur = GameState.Q1;
                break;


            case GameState.Q1:
                if(sInput.toLowerCase().match(answer)){
                    sReply = "you win!!!"
                }else if(sInput.toLowerCase().match("hint") && hints <= 2){
                    count++;
                    sReply = hints[count];
                }else{
                    sReply = "try again";
                    this.stateCur = GameState.Q2;
                }
             break;

             
            case GameState.Q2:
            if(sInput.toLowerCase().match(answer)){
                sReply = "you win!!!"
            }else if(sInput.toLowerCase().match("hint") && hints <= 2){
                count++;
                sReply = hints[count];
            }else{
                sReply = "try again";
            }
         break;

        }
        return(sReply);
    }
}