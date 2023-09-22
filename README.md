# CADT test App

This is a React application that allows you to navigate between two tables (Designs and Setouts), being the first category "Designs", the one selected to have a button that allows the user to edit any row by clicking the pencil avatar button. This button will open a modal popup which contains all visible fields within the row. Whenever we click the "Save" button, this new info will be reflected in the row. On the other hand if we decide to click the "Cancel" button, the row will remain as it was.

## Installation

1. Run `npm install` to install the dependencies.
2. Run `npm run rundevel` this will start the App in the port 3000 and the json-server in the port 5000.

## Application Structure

The application is structured as follows:

- `src/components/App.jsx`: The main component that contains everything within.
- `src/components/Sidebar.jsx`: The secondary component that handles the selection of each view.
- `src/components/Designs.jsx`: The view that will allow us to interact with edition through the edit button.
- `src/components/Setouts.jsx`: The other view that is much more simple, a readonly table.
- `src/components/Table.jsx`: The reusable component that will work for both views independently of the usage.
- `src/components/ModalTable.jsx`: The requested modal that will open up for us when clicking the edit button.
- `src/helpers/fetchData.js`: This contains both functions used to simulate load and update from json-server of our data.
- `src/helpers/initialsGenerator.js`: A function that generates initials to be used as mockup inside our special "By" column.
- `db.json`: A file containing the provided mock data structure that will be read from json-server.
- `src/styles`: In here we will store our reset file that resets our browser inconsistencies like default line, heights, etc. Then we will have a style.scss file which contains the mainContainer css styles, all the rest is basically treated within each component due to the simplicity of the code. If it was a more complex structure the we should have a more complex structure of subfolders in here. We use Sass to ease up the css synthaxis when styling the web page. 

Now that is it! You now have a mini application that allows you to switch between two tables/categories in which one of them, ("Designs"), also allows edition by opening a modal with a submittable form inside.

If you have any questions or need further assistance, please let me know by contacting through email to: lacarq@gmail.com
