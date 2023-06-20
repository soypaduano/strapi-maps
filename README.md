# strapi-maps

City Sky Guess is a game made by Sebastian Paduano (2023).
The game consists on guessing the city from a bird's eye using the Google Maps API. There are two instances
of Google Maps, first one is the biggest map where it shows the current city and the second one (right down)
where the user has to set the location. 
There's a calculation between the coordinates and it's correct only if the distance is under 30kms. 
The game level is set by the city population: the first cities to appear are the ones with more population,
for example London, Paris, Moscow, etc. It has capital cities and not capital cities. 

# tech-stack
The project is developed with Strapi for the backend and React.js for the frontend.
# launch the project
It has two folders: backend & frontend. To start both of them is as simple as:

./frontend/: npm run start
./backend/: npm run develop 

It will open the React frontend on port :3000 and the backend will be opened at http://localhost:1337/admin
where you can change the Strapi entities and data saved. 



