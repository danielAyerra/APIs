import json
import requests as req

def getMethod(name):
    print("Requesting " + name)
    if name == None or name == '':
        resp = req.get('http://localhost:3000').json()
    else: 
        resp = req.get('http://localhost:3000/'+name).json()
    treatResp=json.dumps(resp)
    return treatResp

# JSON String Treatment.
# If simple quotes are used, replace simple quotes by double instead
# TODO: Create a model to guarantee that receiving and sending objects
# are as they should be.
def postMethod(name,element,id):
    print("Sending element "+str(id))
    if "\'" in element:
        print(True)
        treatedElement = element.replace("'", '"')
    else:
        treatedElement = element
    try:
        print(treatedElement)
        objSend=json.loads(treatedElement)
        print(objSend)
        urlAdd = "http://localhost:3000/"+name+"/"+str(id)
        resp=req.post(urlAdd, json=objSend)
        print(resp.json())
    except:
        print('I am a simple API.\nI do not handle exceptions T_T')
   
    finally:
        print('Everything ok?')
    
    
def putMethod(name, element, id):
    print("Sending element "+str(id))
    if "\'" in element:
        print(True)
        treatedElement = element.replace("'", '"')
    else:
        treatedElement = element
    try:
        print(treatedElement)
        objSend=json.loads(treatedElement)
        print(objSend)
        urlAdd = "http://localhost:3000/"+name+"/"+str(id)
        resp=req.post(urlAdd, json=objSend)
        print(resp.json())
    except:
        print('I am a simple API.\nI do not handle exceptions T_T')
   
    finally:
        print('Everything ok?')
    
def deleteMethod():
    
    
    


