// Problem Statement:

// Observe the output which helps to understand the concept of Arrays, Rest and Spread operators, and the concept of destructuring. 

// Activity:

// You are suggested to create a new array and try the code by assigning different values to the variables used.

// Note: You can execute this tryout in your Visual Studio Code IDE or any other editor in case of any issue in executing/viewing response in the below- given pane.

// <!DOCTYPE html>
// <html>  
//     <head>  
//         <title>Iterable Demo</title>
//         <script>  
            let Pdt_Price = [5000, 3000, 500];  
            const [Pdt1, Pdt2, Pdt3] = Pdt_Price;  
            document.write("Total Amount : " + (Pdt1+Pdt2+Pdt3) + "<br/>");       
            
            const [Pdt4,,Pdt5] = Pdt_Price; 
            document.write("Total Amount " + (Pdt4+Pdt5) + "<br/>");	 
            let [ProductId, ...ProductName] = [1001,"Mobiles","Furniture","Tablets","Books"];  
            document.write("Product Id : " + ProductId + "<br/>");   
            document.write("Product Name : " + ProductName +"<br/>");  
//         </script>  
//     </head>  
// </html>  

 
 