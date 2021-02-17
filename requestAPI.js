/*
	requestAPI.js
	Manages REST requests and returns information to webpage
	Simplest API evaa!!!!
	Functions: Post, get, put, delete.
	Comments will be improved for using a proper, standard, code comments. Need to refresh that on google.
*/
//PostMethod -> Uses post request for getting information

const port = "3000";
const server = "http://localhost";

//GetMethod -> Uses get request for getting information
function getMethod(reqType){
	let req;
	if(!reqType){
		req=server+":"+port;
	}
	else{
		req=server+':'+port+'/'+reqType;
	}
	fetch(req,{mode:'cors'})
	.then(response=>{
		if(response.ok===true){
			response.json().then(res=>{
				return res;
			}).catch(err=>console.error(err));
		} else{
			console.error('Error. Status code: '+ response.status + ' '+ response.statusText);
		}
	})
	.catch(err=>{console.error(err);});
}

//PutMethod -> Uses put request for sending information
function putMethod(reqType, newObj, id){
	if (!reqType||!newObj){
		console.error("Unable to do the request");
	} else {
		const req=server+':'+port+'/'+reqType+'/'+id;
		fetch(req,
			{	mode:'cors', 
				method:'PUT', 
				headers:
					{'Content-Type':'application/json'
				}, 
				body: JSON.stringify(newObj)
			}

			).then(response=>{
				if(response.ok===true){
					response.json().then(res=>{
						return res;
					}).catch(err=>console.error(err));
				} else{
					console.error('Error. Status code: '+ response.status + ' '+ response.statusText);
				}
			})
			.catch(err=>console.error(err));
	}
}

//PostMethod -> Uses post request for getting information
function postMethod(reqType, newObj, id){
	if (!reqType||!newObj){
		console.error("Unable to do the request");
	} else {
		const req=server+':'+port+'/'+reqType+'/'+id;
		fetch(req,
			{	mode:'cors', 
				method:'POST', 
				headers:
					{'Content-Type':'application/json'
				}, 
				body: JSON.stringify(newObj)
			}

		).then(response=>
			{
				if(response.ok===true){
					response.json().then(res=>{
						return res;
					}).catch(err=>console.error(err));
				} else{
					console.error('Error. Status code: '+ response.status + ' '+ response.statusText);
				}
			}
		).catch(err=>{console.error(err);});
	}
}

//DeleteMethod -> Uses delete request for deleting information
function deleteMethod(reqType, id){
	if (!reqType||!id){
		console.error("Unable to do the request");
	} else {
		const req=server+':'+port+'/'+reqType+'/'+id;
		fetch(req,
			{	
				mode:'cors', 
				method:'DELETE', 
			}
		).then(response=>{
			if(response.ok===true){
				response.json().then(res=>{
					return res;
				}).catch(err=>console.error(err));
			} else{
				console.error('Error. Status code: '+ response.status + ' '+ response.statusText);
			}
		})
		.catch(err=>{console.error(err);});
}
