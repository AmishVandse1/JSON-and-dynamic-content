let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "title": "Pizza",
    "description": "Plain Cheese Pizza",
    "image": "https://assets.vogue.in/photos/5ed8e32c64872e9ac717c767/2:3/w_2560%2Cc_limit/pizza%2520recipe%2520pizza%2520to%2520make%2520at%2520home%2520quick%2520and%2520easy%2520recipes.jpg",
    "price": 10.99,
  },
  {
    "title": "Sandwich",
    "description": "Chicken Sandwich",
    "image": "https://www.skinnytaste.com/wp-content/uploads/2023/06/Grilled-Chicken-Sandwiches-5-1.jpg",
    "price": 12.99,
  },
  {
    "title": "Fries",
    "description": "Regular Potato Fries",
    "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg?resize=900%2C471",
    "price": 5.99,
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
    createElementProper(jsonDatabase[i]);
  }


function createElementProper(JSON) {
    let newContentElement = document.createElement("div");
    newContentElement.classList.add("contentItem");

  
  let newContentHeading = document.createElement("h3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = JSON['title'];
  newContentElement.appendChild(newContentHeading);

  
  let newImage = document.createElement("img");
  newImage.classList.add("contentImage");
  newImage.src = JSON['image'];
  newImage.style.width = "300px"; 
  newImage.style.height = "300px";
  newContentElement.appendChild(newImage);

  

  
  let newDescription = document.createElement("p");
  newDescription.classList.add("contentDescription");
  newDescription.innerText = JSON['description'];
  newContentElement.appendChild(newDescription);


  let newPrice = document.createElement("p");
  newPrice.classList.add("contentPrice");
  newPrice.innerText = "Price: $" + JSON['price'];
  newContentElement.appendChild(newPrice);

  
  contentGridElement.appendChild(newContentElement);
}

