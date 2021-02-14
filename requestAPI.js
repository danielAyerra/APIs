/*
	requestAPI.js
	Manages REST requests and returns information to webpage
	Simplest API evaa!!!!
	Functions: Post, get, put, delete.
	Comments will be improved for using a proper, standard, code comments. Need to refresh that on google.
*/
//PostMethod -> Uses post request for getting information

const port = "3000";
const server = "http://localhost/peliculas";

function postMethod() {
	let req="POST "+server+":"+port;
}

//GetMethod -> Uses get request for getting information
function getMethod(){
	const req=server+":"+port;
	const info = new Promise(function (resolve, reject) {
    	var xhr = new XMLHttpRequest();
    	xhr.open('GET', req);
    	xhr.onload = function () {
    		if (this.status >= 200 && this.status < 300) {
       		 	resolve(xhr.response);
      	} else {
        	reject({
          		status: this.status,
          	statusstatusText: xhr.statusText
        	});
      	}
    	};
    	xhr.onerror = function () {
      		reject({
        		status: this.status,
        		statusText: xhr.statusText
      		});
    	};
        xhr.send();
    
  }).then(response=>{console.log(response);})
	.catch(err=>{console.log(err);});
}

//PutMethod -> Uses put request for sending information
function putMethod(){
	let req="PUT "+server+":"+port;
}

//DeleteMethod -> Uses delete request for deleting information
function deleteMethod(){
	let req="DELETE "+server+":"+port;
}

/* Uso de FETCH
// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });*/