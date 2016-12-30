console.log("Loading charts1");

document.onload = function(){
    
    console.log("Document loaded");
    var charts = document.getElementsByClassName("s4_dashboard");
    
    console.log(charts);

    var count;
    for (count = 0; count < charts.length; count++) {
        console.log("Element found!");
        console.log(charts[count].id);
    }
};

