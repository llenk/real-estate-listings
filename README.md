# Notes

Could I get comments on how I combined the code for rent and sale in the service? Is there a better way that making that array that contains 'rent' and 'sale'? Also, should the cheapest property thing be in another get request? Or is there a way to send in different params for the get request, so there only needs to be one, even if I added in the filtering for stretch mode? I ran out of time, but I'd like to look into that later. 

## TODO

- [x] Create a Full Stack application from the ground up using Angular, Node, Express, and SQL (SEAN stack).
- [x] Work with the data set provided to you.
- [x] Account for the different data properties ("rent" versus "sale") and ensure that they only show up on the correct views.
- [x] 3 views, 3 angular routes, each with a controller and view file. See view/route details below.
- [x] Implement a `Card`, a common user interface element.

### Home/Add Listing View/Route

- [x] Create a client-side route, controller, and view file for the home page.
- [x] Allow a user to add a property to the database on this view. You will need to give the user an option for either a Rental property or a Sale property.
- [x] Allow the user to enter the name of one of the images provided to display with the new listing. This only needs to be a text input.


### Rental Property View/Route

- [x] Create a client-side route, controller, and view file for Rental properties.
- [x] Display only those properties that are For Rent.
- [x] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.


### Sale Property View/Route

- [x] Create a client-side route, controller, and view file for Sale properties.
- [x] Display only those properties that are For Sale.
- [x] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.

## Stretch Goals

- [x] Ability to delete an existing listing. Place the `delete` button on each listing card.
- [x] Move all `$http` requests to an Angular Service


## More Stretch Goals

- [x] Display the least expensive property featured prominently at the top of the view
- [ ] Ability to search or filter by various parameters (try doing this using a server side route with a query parameter)
- [x] Add other images to your application