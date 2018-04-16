function game() {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        
        for (var i=0; i< this.answer.length; i++) {
            console.log(i + ':' + this.answer[i]);
        }
    }
    
var scor=0; 
    Question.prototype.checkAnswer = function(ans) {
        
        if (ans === this.correct) {
            scor+=1;
            
            console.log('jawaban benar ! scor anda sekarang '+'=' +scor);
            
        } else{
            console.log('salah. coba lagi : '+scor);
        }  
    }
    
    var q1 = new Question('apakah javascript bahsa pemrograman yang paling keren sedunia?',
                         ['ya', 'tidak'],'0');
    
    var q2 = new Question('siapa nama dosen yang mengajar kuliah ini ?',
                         ['john', 'ichea;', 'oskar'],'2');
    
    var q3 = new Question('kata yang paling bagus dalam mendeskripsikan koding',
                         ['bosen', 'sussah', 'membahgiakan', 'membosankan'],'2');
    
K:
    {
    for (;;){
                
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
            
    questions[n].displayQuestion();
    
    var answer = prompt('pilih jawaban yang benar.');
        if(answer == 'exit'){
            break K;
   
        }
    questions[n].checkAnswer(answer);
    }}
    
};