import json
import requests as req

def getMethod(name):
    print("Requesting " + name)
    elements=''
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
def postMethod(element, id):
    print("Sending element "+id)
    treatedElement=''
    if "\'" in element:
        print(True)
        treatedElement = element.replace("'", '"')
    else:
        treatedElement = element
    try:
        pyObject=json.loads(treatedElement)
    except:
        print('Access except\n Not a correct format.')
    print(pyObject)    
    
    
def putMethod():
    print("Sending element "+id)
    treatedElement=''
    if "\'" in element:
        print(True)
        treatedElement = element.replace("'", '"')
    else:
        treatedElement = element
    try:
        pyObject=json.loads(treatedElement)
    except:
        print('Access except\n Not a correct format.')
    print(pyObject)    
    
def deleteMethod():
    
    
    


