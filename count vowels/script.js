// let countvowels=prompt("enter the name");
// function countvowels(str){
// let count=0;
// for (let char of str){
//     if(char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u"|| char=="A"|| char=="E"|| char=="I"|| char=="O"|| char=="U")
//        {
//          count++;
//        }
//     }
//     return count;
// }
const countvowels=(str)=>{
    let count=0;
    for (let char of str){
        if(char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u"|| char=="A"|| char=="E"|| char=="I"|| char=="O"|| char=="U")
           {
             count++;
           }
        }
        return count;
    }