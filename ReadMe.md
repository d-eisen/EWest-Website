# H1 EmpowerWest Website: Guestbook Feature
This is an informational website for a local non-profit organization.
The focus of the site is deliver content regarding the values of the organization, news stories and other media related the organization’s activities.
This development iteration of the site includes a beta verison of a contact database. The database utilizes the JavaScript MEAN stack.  The application is written in Node.js. The Express framework serves the Mongo database. UI is written in jQuery.
The site includes a list feature showing all user registrations. These registrations are served by a back end database. Entries can be edited and deleted.
Using the Guestbook app
Click `Guestbook` in the nav bar. The guestbook application served on the site includes an input form for collecting contact information from visitors. 
•	Once the server is initialized, the app calls a function to display a list of registered users inline on the site. 
•	`Add file` calls a input form where new records are created when submit is clicked
•	On the list of entries click `Edit` to make a file editable.
•	`Delete` removes a record.
•	Map feature will be added in the next version to show a map corresponding to the the user’s zip code as indicated on the form entry
To run the application, clone or download the repository github.com/CodeLouisville/FSJS-class-project.git. 
Point the terminal to the root directory and do the following:
•	Run ‘npm install’ to install necessary packages
•	Node modules are included in repository
o	Primary dependencies in rendering the site are:
	body-parser": "^1.18.2",
	"express": "^4.16.3",
	"handlebars": "^4.0.11",
	"mongoose": "^5.0.11",
•	Mongo service is hosted by MLab. Installation of Mongo is unnecessary.
•	Run ‘npm start’ to intialize the server process
•	Open the browser and point to localhost:3030
•	Click `Guestbook` in the top nav bar.
•	To stop the server, type `Control C` in the terminal

#

EmpowerWest Website: Guestbook Feature
This is an informational website for a local non-profit organization.

The focus of the site is deliver content regarding the values of the organization, news stories and other media related the organization's activities.

This development iteration of the site includes a beta verison of a contact database. The database utilizes the JavaScript MEAN stack. The application is written in Node.js. The Express framework serves the Mongo database. UI is written in jQuery.

The site includes a list feature showing all user registrations. These registrations are served by a back end database. Entries can be edited and deleted.

Using the Guestbook app

Click Guestbook in the nav bar. The guestbook application served on the site includes an input form for collecting contact information from visitors.

Once the server is initialized, the app calls a function to display a list of registered users inline on the site.
Add file calls a input form where new records are created when submit is clicked
On the list of entries click Edit to make a file editable.
Delete removes a record.
Map feature will be added in the next version to show a map corresponding to the the user's zip code as indicated on the form entry
To run the application, clone or download the repository github.com/CodeLouisville/FSJS-class-project.git.

Point the terminal to the root directory and do the following:

Run 'npm install' to install necessary packages
Node modules are included in repository
Primary dependencies in rendering the site are:
body-parser": "^1.18.2",
"express": "^4.16.3",
"handlebars": "^4.0.11",
"mongoose": "^5.0.11",
Mongo service is hosted by MLab. Installation of Mongo is unnecessary.
Run 'npm start' to intialize the server process
Open the browser and point to localhost:3030
Click Guestbook in the top nav bar.
To stop the server, type Control C in the terminal