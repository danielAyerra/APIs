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


const getMethod = async function(reqType){
	let req;
	if(!reqType){
		req=server+":"+port;
	}
	else{
		req=`${server}:${port}/${reqType}`;
	}
	const response = await fetch(req,{mode:'cors'})

	return response.json();
}
//GetMethod -> Uses get request for getting information
/*const getMethod = function(reqType){
	let req;
	if(!reqType){
		req=server+":"+port;
	}
	else{
		req=`${server}:${port}/${reqType}`;
	}
	fetch(req,{mode:'cors'})
	.then(response=>{
		if(response.ok===true){
			response.json().then(res=>{
				console.log(res);
				return res;
			}).catch(err=>console.error(err));
		} else{
			console.error('Error. Status code: '+ response.status + ' '+ response.statusText);
			return {message: 'Failed'};
		}
	})
	.catch(err=>{console.error(err);
		return {message: 'Failed'}
	});
}*/

//PutMethod -> Uses put request for sending information
const putMethod = function (reqType, newObj, id){
	if (!reqType||!newObj){
		console.error("Unable to do the request");
	}else{
		const req=`${server}:${port}/${reqType}/${id}`;
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
						console.log(res);
						return res;
					}).catch(err=>console.error(err));
				} else{
					console.error('Error. Status code: '+ response.status + ' '+ response.statusText);
				}
			})
			.catch(err=>{console.error(err);});
	}
}

//PostMethod -> Uses post request for getting information
const postMethod = function (reqType, newObj, id){
	if (!reqType||!newObj){
		console.error("Unable to do the request");
	} else {
		const req=`${server}:${port}/${reqType}/${id}`;
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
						console.log(res);
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
const deleteMethod = function(reqType, id){
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
					console.log(res);
					return res;
				}).catch(err=>console.error(err));
			} else{
				console.error('Error. Status code: '+ response.status + ' '+ response.statusText);
			}
		})
		.catch(err=>{console.error(err);});
	}
}

