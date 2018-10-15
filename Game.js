const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    Q1:  Symbol("Q1"),
    Q2: Symbol("Q2"),
    Q3: Symbol("Q3"),
    Q4: Symbol("Q4"),
    Q5: Symbol("Q5"),
    Q6: Symbol("Q6"),
    Q7: Symbol("Q7"),
    Q8: Symbol("Q8"),
    Q9: Symbol("Q9"),
    Q10: Symbol("Q10"),
    Q11: Symbol("Q11"),
    Q12: Symbol("Q12"),
    Q13: Symbol("Q13"),
    Q14: Symbol("Q14"),
    Q15: Symbol("Q15"),
    Q16: Symbol("Q16"),
    Q17: Symbol("Q17"),
    Q18: Symbol("Q18"),
    Q19: Symbol("Q19")


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
        var hints = ["its a sport","you play it", "it's popular"];

        switch(this.stateCur){
            case GameState.WELCOMING:
                 sReply = "Guess what am I thinking?... You get 3 hints in 19 attempts!!!";
                this.stateCur = GameState.Q1;
                break;


            case GameState.Q1:
                if(sInput.toLowerCase().match(answer)){
                    sReply = "you won!!!"
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
                sReply = "you won!!!"
                 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
                count++;
                sReply = hints[count];
                 }else{
                sReply = "try again";
                this.stateCur = GameState.Q3;
                }
             break;

            case GameState.Q3:
                 if(sInput.toLowerCase().match(answer)){
                  sReply = "you won!!!"
                }else if(sInput.toLowerCase().match("hint") && hints <= 2){
                  count++;
                   sReply = hints[count];
                }else{
                   sReply = "try again";
                  this.stateCur = GameState.Q4;
                }
             break;

            case GameState.Q4:
                if(sInput.toLowerCase().match(answer)){
                 sReply = "you won!!!"
                }else if(sInput.toLowerCase().match("hint") && hints <= 2){
                  count++;
                  sReply = hints[count];
                }else{
                  sReply = "try again";
                  this.stateCur = GameState.Q5;
                } 
             break;

             case GameState.Q5:
                if(sInput.toLowerCase().match(answer)){
                 sReply = "you won!!!"
                }else if(sInput.toLowerCase().match("hint") && hints <= 2){
                  count++;
                  sReply = hints[count];
                }else{
                  sReply = "try again";
                  this.stateCur = GameState.Q6;
                } 
             break;

             case GameState.Q6:
             if(sInput.toLowerCase().match(answer)){
              sReply = "you won!!!"
             }else if(sInput.toLowerCase().match("hint") && hints <= 2){
               count++;
               sReply = hints[count];
             }else{
               sReply = "try again";
               this.stateCur = GameState.Q7;
             } 
          break;

          case GameState.Q7:
          if(sInput.toLowerCase().match(answer)){
           sReply = "you won!!!"
          }else if(sInput.toLowerCase().match("hint") && hints <= 2){
            count++;
            sReply = hints[count];
          }else{
            sReply = "try again";
            this.stateCur = GameState.Q8;
          } 
       break;


       case GameState.Q8:
       if(sInput.toLowerCase().match(answer)){
        sReply = "you won!!!"
       }else if(sInput.toLowerCase().match("hint") && hints <= 2){
         count++;
         sReply = hints[count];
       }else{
         sReply = "try again";
         this.stateCur = GameState.Q9;
       } 
    break;

    case GameState.Q9:
    if(sInput.toLowerCase().match(answer)){
     sReply = "you won!!!"
    }else if(sInput.toLowerCase().match("hint") && hints <= 2){
      count++;
      sReply = hints[count];
    }else{
      sReply = "try again";
      this.stateCur = GameState.Q10;
    } 
 break;

 case GameState.Q10:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q11;
 } 
break;


case GameState.Q11:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q12;
 } 
break;


case GameState.Q12:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q13;
 } 
break;

case GameState.Q13:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q14;
 } 
break;

case GameState.Q14:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q15;
 } 
break;


case GameState.Q15:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q16;
 } 
break;


case GameState.Q16:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q17;
 } 
break;


case GameState.Q17:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q18;
 } 
break;

case GameState.Q18:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "try again";
   this.stateCur = GameState.Q19;
 } 
break;


case GameState.Q19:
 if(sInput.toLowerCase().match(answer)){
  sReply = "you won!!!"
 }else if(sInput.toLowerCase().match("hint") && hints <= 2){
   count++;
   sReply = hints[count];
 }else{
   sReply = "You lost";
 } 
break;







          

         }
        return(sReply);
    }
}