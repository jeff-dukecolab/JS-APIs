function reqListener () {
  var data = JSON.parse(this.responseText);
  console.log(data);
  
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://world.openfoodfacts.org/api/v0/product/01213104.json");
oReq.send();