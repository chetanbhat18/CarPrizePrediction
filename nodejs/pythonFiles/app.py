import sys
import json
import pickle
import numpy as np
import sklearn
from sklearn.preprocessing import StandardScaler

with open('carPrize.pkl', 'rb') as fa:
    model = pickle.load(fa)

Owner = int(sys.argv[5]) 
Present_Price=float(sys.argv[2])
 
Kms_Driven=int(sys.argv[3])
Kms_Driven2=np.log(Kms_Driven)
        
Fuel_Type_Petrol=sys.argv[6]
if(Fuel_Type_Petrol=='Petrol'):
	Fuel_Type_Petrol=1
    Fuel_Type_Diesel=0
else:
	Fuel_Type_Petrol=0
    Fuel_Type_Diesel=1

Year1 = sys.argv[1]
Year = 2021-Year1

Seller_Type_Individual=sys.argv[7]
if(Seller_Type_Individual=='Individual'):
	Seller_Type_Individual=1
else:
	Seller_Type_Individual=0	

Transmission_Mannual=sys.argv[4]
if(Transmission_Mannual=='Mannual'):
	Transmission_Mannual=1
else:
	Transmission_Mannual=0
        
prediction=model.predict([[Present_Price,Kms_Driven2,Owner,Year,Fuel_Type_Diesel,Fuel_Type_Petrol,Seller_Type_Individual,Transmission_Mannual]])
output=round(prediction[0],2)
"""
data1 = json.dumps(output)
"""

print(output)