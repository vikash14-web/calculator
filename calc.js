let appendnumber=(num)=>{
    // console.log(num);
   document.getElementById("inp").value+=num 
}
let appendOperator=(operator)=>{
    document.getElementById("inp").value+=operator
}
let clearScreen=()=>{
    document.getElementById("inp").value=""
}
let calculate=()=>{
    let inputValue=document.getElementById("inp").value
    //   console.log(inputValue);
      document.getElementById("inp").value=eval(inputValue)
      
}
let back=()=>{
    let s=document.getElementById("inp").value

    document.getElementById("inp").value=s.slice(0,-1)
}   