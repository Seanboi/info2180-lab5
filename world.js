window.onload = function(){
    var lookupbtn = document.getElementById("lookup");
    var searchinput = document.getElementById("country");
    var result = document.getElementById("result");


    lookupbtn.addEventListener('click', function(){
        var query = searchinput.value.trim();
        const httpRequest = new XMLHttpRequest();
        var url = "world.php";

        if(query){
            url += "?country=" + encodeURIComponent(query);
        }



        httpRequest.onreadystatechange = function(){
    
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                  result.innerHTML = httpRequest.responseText
                } else {
                  result.innerHTML = 'There was a problem with the request.';
                }
              }
            }
            httpRequest.open('GET', url);
            httpRequest.send();
        });

}