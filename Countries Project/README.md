In this simple project I have used JSON API to get the data 

During the coding I have faced many challengers such as :- 
1) This is my first time working on JOSN API so it took me about 2 hours to understand the concept
2) Arranging data as a table instead of bullets
______________________________________
After finding a code that I can use the get data from the API and show it as HTML 
The code used forEach function but it keeps on giving me 
"Cannot read properties of undefined (reading 'forEach') " 
error
So I decided to search for a solution but nothing showed up 
after thinking I have tried to do it my self , It took me multiple tries to find the solution
______________________________________
after I have done my work for Capital , flag , currency , dial code  suddenly I have noticed that there is a filter to get only specified countries information , so I decide to use it , to reduce my code and it will help me with creating a table 
I have tried to add capital, but I could not because 
-my data viewed as table but if I had put them as bullets, I could add it
-the filter did not include capital
______________________________________
In the table , I used the way to show all the information ,and I looked for a code that would help me to hide columns and I have found one and modified it to be suitable for my program

______________________________________
also I have noticed that in the documentaton of the API there is a typo in request example 
they used
https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialcode
but actually it have to be    
https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode

this typo leads to inability getting Dialcode
