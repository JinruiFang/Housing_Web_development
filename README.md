# INFO 340 Project Group 9
## Housing Here

This repository contains code for an interactive information web app, created for the _Client-Side Web Development_ course at the UW iSchool.

## Project: Complete Web app
#### Published Website:  https://info340---housinghere.web.app
#### Comment: Our three features are:
  - The 'filter' feature in the Home Page.
  - Click the house info on the Home Page and redirect you to a more detailed page about the housing.
  - The Map feature which shows you the location of the houses (can be accessed through secondpage & navigation bar).
  - Sell form + Median Home Price AJAX information
  - Please note the search bar is not working in the homepage and we don't count it as a feature. 

## Project: Draft 2 (React)

#### One working feature is the Sell form, it is able to reflect the user's input name and selling address as a reaction. This featured used both `usestate` and `props`, form is controlled to track their input.

#### We also use props when connecting the dataset to the secondpage, which shows the housing info automatically connected to the dataset.

We are still working on the filtering, searching features, adding more data, fixing css (including media).

In order to run our react app on your local machine, you have to do the following in your terminal:

#### -1. change directory to project folder (this directory)
`cd info340b-sp22-project-starter-Fusheng-Wang`

#### -2. install dependencies, run the code below in your terminal
`npm install`

`npm install react-router-dom `

`npm install react-leaflet `

`npm install --save styled-components`

`npm install whatwg-fetch --save`



#### -3. run the server
`npm start`

##### Now your are ready to modify and check the react app.

##### You can check the react app by entering `http://localhost:3000/Home` in your website bar.



## Project: Draft 1 (Static Mock-Up)
#### Below the the checklists that we think are worth commenting for our Draft 1:

#### 1.Content and HTML Structure

- [x]   Includes hyperlinks between two pages (in both directions!)
##### comment: click the "205 40th Avenue E, Seattle" box in the main page then you can be directed to the second page. In the second page, click the home icon on the left corner to back to the main page.

- [x]   Includes a form element
##### comment: form element including search feature, area filter feature in the main page.


#### 4.Responsive Design
- [x] Includes media queries to handle 2+ sizes
##### comment: We support 3 sizes: min-598px as default, 768px, 1179px
