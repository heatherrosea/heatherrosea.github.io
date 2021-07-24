const requestURL = '../final/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
  
  const business = jsonObject['business'];
  
for (let i = 0; i < business.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let image = document.createElement('img'); 
    let address = document.createElement("p");
    let tel = document.createElement("p");
    
    h2.textContent = business[i].name;
    address.textContent = 'Address: ' + business[i].address;
    tel.textContent = 'Telephone: ' + business[i].tel;  
  
    image.setAttribute('src', business[i].imageurl);
    image.setAttribute('alt', business[i].name + ' - ' + business[i].order);

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(address);
    card.appendChild(tel);
    card.appendChild(image);


    document.querySelector('div.directory').appendChild(card);
    
  }
  });
