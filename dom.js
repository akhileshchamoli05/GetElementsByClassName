 /*var items=document.getElementsByClassName("list-group-item");
console.log(items);
items[1].textContent='Hello 2';
items[1].style.fontweight='bold';
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
    items.style.fontweight='bold';
}*/

//var tags=document.getElementsByTagName("li");
//tags[1].style.backgroundColor="Yellow";

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 2px #ccc';
//  var l=document.querySelector('li:nth-child(2)');
//  l.style.backgroundColor="green";

 var odd=document.querySelectorAll('li:nth-child(odd)');
 for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}
