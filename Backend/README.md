- ## Backend of Tendercuts
  We have used railways to deploy the application
  ## Routes
  There were a total of three routes address which has the i,e. find , create
  The second route is the cart Route which has create ,update (which will be updating the item quantity) and remove( remove the from the cart)
  The third route is the Products Route which basically gets the products from the database 
  ## Middleware
  AuthMiddleware will get the userid from the header
  that was sent from the frontend and on every request it will set that id to the request object.
