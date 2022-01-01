function loaded(){radiochanged();};

function transfer(){
    if(document.getElementById("dh-radio").checked){
        //convertire dh to dollar
        var dh = document.getElementById("input").value;
        var dollar= dh*0.11;
        document.getElementById("output").value=dollar;
    }
    else if(document.getElementById("dollar-radio").checked){
        //convertire dollar to dh
        var dollar = document.getElementById("input").value;
        var dh= dollar*9.28;
        document.getElementById("output").value=dh;

    }

}

function radiochanged(){

    if(document.getElementById("dh-radio").checked){
        //convertire dh to dollar
        document.getElementById("input-label").innerHTML ="dirham";
        document.getElementById("output-label").innerHTML ="dollar";
     }
    else if(document.getElementById("dollar-radio").checked){
        //convertire dollar to dh
        document.getElementById("input-label").innerHTML ="dollar";
        document.getElementById("output-label").innerHTML ="dirham";

    }

}