# Ceiba-Airlines
## Description

Ceiba-Airlines is a reservation web aplication that will allow you to buy your tickets whenever you chose to travel with Ceiba, the Equatorial Guinee's airline company.
 
## User Stories

- **Homepage**  - The user will be able to access the homepage to search for flights as well as to login and signup. 


- **Sign up** - The user will be able to sign up on the webpage so that they can enjoy the benefits of being the airlines customer.

- **Login** - The user will be able to login on the webpage and have access to all the services he has with the airlines.

- **Logout** - The user will be able to log out from the webpage to guarantee only him has access his account.

- **Flights** - The user will be able to see the history of flights his acounts(where he has been to, where he is going to and recomendations).

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 

- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault. 

## Backlog

Flight booking confirmation
- When an user buy a flight he will receive and email confirming the reserve and the flight details.

First vs Turist class
- A user will pay different prices depending on the seats he wants to occupy in the airplain.
- First class seats will be more confortable and will include extra services, however, these extra services will make the price expensive.
- Turist class seats will not have the extra services the first class seats have, therefore the price will be more economic.

Price setting
- Set prices depending on when the user is making the booking. The sooner he buys the flight the cheeper it will be.

Flight extras
- The user will be able to add extra luggage if needed
- The user will be able to select a seat.

Homepage:
- ...

## Routes

| Method      | Description | Test Text     |
| :---        |    :----:   |          :---:|
| GET         | /           | Renders the homepage   |
| GET         | /signup| Renders the singup page   |
| POST        | /signup| Redirects to homepage|
| GET         | /login| Renders the login page   |
| POST        | /login| Redirects to homepage|
| GET         | /from - to| Renders the list of flights available on the dates selected by the user   |
| POST        | /from - to| Redirects to /payment|
| GET         | /payment| Renders the payment page   |
| POST        | /from - to| Redirects to /user|
| GET         | /user| Renders the user's flights history |
| GET         | /user/:flightId| Renders the itinerary of the selected flight|

## Components

- Home component
- User component
- Flight component(backlog)
- Signup component
- Login component

## Models

User model

```
email - { type: String, required: true }
password - { type: String, required: true }
name - String
surname - String
phone - String
address - String
city - String
country - String
```
## Links

### Trello

[Trello board](https://trello.com/b/FkdA3atS/ceiba-airlines) 

### Git

[Repository Link](https://github.com/IONDO/Ceiba-Airlines)

[Deploy Link]()

### Slides

[Slides Link]()