function randomFun(){
    let min=0;
    let max=9;
    let count =document.getElementById("count").value;
    var ranNum='';
    for(var i=0;i<count;i++){
        ranNum+= ''+ Math.ceil((Math.random() * (max - min)) + min);
    } 
    document.getElementById("scmNum").innerHTML = ranNum;
}
