var h1=document.createElement("h1");
h1.innerHTML="Making Ice Cream Sandwiches";
h1.style.color="orange";
document.body.appendChild(h1);

var para1=document.createElement("p");
para1.innerHTML="Kids and adults alike will be fighting over these big monster ice cream sandwiches! The best part about these things is that they are no bake. You don't even need to warm up your oven if you purchased cookies. Makes early to use the mini M&Ms or the large ones will fall off. As a volunteer field editor for Taste of Home magazine, I love recipes that can be assembled quickly and still make a quick presentation.";
para1.style.fontSize="20px";
document.body.appendChild(para1);

var myDiv=document.createElement("div");
myDiv.style.backgroundColor="orange";
myDiv.style.padding="20px";
var h3=document.createElement("h3");
h3.innerHTML="Ingredients";
myDiv.appendChild(h3);
var ultag = document.createElement("UL");
function createBullet(ul_tag, text) {
    var li_item = document.createElement("LI");
    var itemText = document.createTextNode(text);
    li_item.appendChild(itemText);
    ul_tag.appendChild(li_item);
}
createBullet(ultag, "Cookies and Cream ice cream");
createBullet(ultag, "Large chocolate chip cookies");
createBullet(ultag, "M&M's minis");
createBullet(ultag, "Reese's mini peanut butter cups");
myDiv.appendChild(ultag);
document.body.appendChild(myDiv);

var image1=document.createElement("img");
image1.src="ice-cream.jpg";
image1.style.width="24%";
document.body.appendChild(image1);
var image2=document.createElement("img");
image2.src="cookies.jpg";
image2.style.width="24%";
document.body.appendChild(image2);
var image3=document.createElement("img");
image3.src="mmminis.jpg";
image3.style.width="24%";
document.body.appendChild(image3);
var image4=document.createElement("img");
image4.src="ree.jpg";
image4.style.width="24%";
document.body.appendChild(image4);

var para2=document.createElement("p");
para2.innerHTML="For more information about this recipe, please visit ";
var link=document.createElement("a");
link.href="ice-cream-sandwich.jpg";
link.innerHTML="The Taste of Home website.";
para2.appendChild(link);
document.body.appendChild(para2);
