
function addItems(){
    var button = document.createElement("button")
    var item = prompt("what do u want to add?")
    var quantity = prompt("how much quantity?")
    var price = prompt("cost")
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var a =document.getElementById("table").appendChild(tr);
    a.appendChild(td).innerText=item
    a.appendChild(td2).innerText=quantity
    a.appendChild(td3).innerText=price
}
