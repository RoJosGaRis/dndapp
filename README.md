# DND APP
## Web application built for DND DMs
This first iteration will provide basic tools for NPC generation and administration.

## Tools in use
The application is built on the React.js framework as the front-end. It also implements a connection to a Node.js [back-end API](https://github.com/RoJosGaRis/DnDApp_Server), which connects to a MongoDB online database.

## Color palette
### CSS HEX

- --dark-moss-green: #656839ff; 
- --aquamarine: #a1e8ccff;
- --dark-purple: #370926ff;
- --gunmetal: #012a36ff;
- --dark-spring-green: #137547ff;

# Functions
## Move between pages
The buttons on the left allow for quick movement between pages:

<img src="public/Buttons.png" height="300">

## Consult
The first page displays a simple menu with the queried data from https://www.dnd5eapi.co/api/.
By using a filter menu, obtained by the API, the user can choose the area to look for. Then from the results,
more details and information are provided. (Currently non-parsed data in JSON Format)

| Before Filters | After Filters |
|---|---|
| <img src="public/ConsultFilter.PNG" alt= "Before Filter" width="700"> | <img src="public/ConsultResult.PNG" alt= "Before Filter" width="700">|

## Creature consult
The second page displays a dynamically changing menu with hoverable spaces for creatures information.
Quering from a MongoDB database accessed through the [back-end API](https://github.com/RoJosGaRis/DnDApp_Server), displays the names of all creatures stored through a dropdown.

| On origin |
|:-:|
|<img src="public/CreatePageOrigin.PNG" alt= "Before Filter" width="700"> |
|Choosing |
| <img src="public/CreatePageSelect.PNG" alt= "Before Filter" width="700">|
|Filtered |
|<img src="public/CreatePageDisplayed.PNG" alt= "Before Filter" width="700"> |

