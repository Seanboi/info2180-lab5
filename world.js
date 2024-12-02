window.onload = function(){
  var lookupbtn = document.getElementById("lookup");
  var lookupcitiesbtn = document.getElementById("lookup2")
  var searchinput = document.getElementById("country");
  var result = document.getElementById("result");


  function fetchData(query,lookup){
      const httpRequest = new XMLHttpRequest();
      var url = "world.php";

      if(query){
          url += "?country=" + encodeURIComponent(query) + "&lookup=" + encodeURIComponent(lookup);
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
      };

      lookupbtn.addEventListener('click', function(){
      var query = searchinput.value.trim();
      fetchData(query,'');
      });

      lookupcitiesbtn.addEventListener('click', function(){
      var query = searchinput.value.trim();
      fetchData(query,'cities');
      })
}