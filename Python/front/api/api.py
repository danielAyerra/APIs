import json
import requests as req

urlBAddr = 'http://localhost:3000/'

def getMethod(name):
    print("Requesting " + name)
    if name == None or name == '':
        resp = req.get(urlBAddr).json()
    else: 
        resp = req.get(urlBAddr+name).json()
    treatResp=json.dumps(resp)
    return treatResp

# JSON String Treatment.
# If simple quotes are used, replace simple quotes by double instead
# TODO: Create a model to guarantee that receiving and sending objects
# are as they should be.
def postMethod(name,element,id):
    if "\'" in element:
        print(True)
#Make sure that object is double quoted to avoid JSON parser errors
        treatedElement = element.replace("'", '"')
    else:
        treatedElement = element
    try:
        objSend=json.loads(treatedElement)
        print(objSend)
        urlAdd = urlBAddr+name+"/"+str(id)
        resp=req.post(urlAdd, json=objSend)
        print(resp.json())
    except json.JSONDecodeError as e:
        print('Error: '+e.msg)
    except:
        print('''Unrecognized error. It is not my fault ¯\(¬ ¬)/¯.
                  Check your server or the connection ;)
              ''')
    
    
def putMethod(name, element, id):
    if "\'" in element:
        print(True)
#Make sure that object is double quoted to avoid JSON parser errors
        treatedElement = element.replace("'", '"')
    else:
        treatedElement = element
    try:
        objSend=json.loads(treatedElement)
        print(objSend)
        urlAdd = urlBAddr+name+"/"+str(id)
        resp=req.put(urlAdd, json=objSend)
        print(resp.json())
    except json.JSONDecodeError as e:
        print('Error: '+e.msg)
    except:
        print('''Unrecognized error. It is not my fault ¯\(¬ ¬)/¯.
                  Check your server or the connection ;)
              ''')
    
def deleteMethod(name,id):
    try: 
        urlAdd=urlBAddr+name+"/"+str(id)
        resp=req.delete(urlAdd)
        print(resp.json())
    except:
         print('Unrecognized error. It is not my fault ¯\(¬ ¬)/¯')
    
    


