# Chat Stream
Chat Stream is an application where users can create accounts and chat with people through websockets while watching a hardcoded Youtube playlist. You can choose to observe or partake in the chat antics. Very minimal app built with React on Rails using Devise or user authentication and Action Cable for the web sockets. 

# Known Bugs / Issues 
Currently a user can sign in on the Heroku deployed app but cannot post to the chatroom. There is currently a 404 error that I am trying to work out. Other than that if you would like to use this app on your local machine clone the repo down.

Run `bundle install`
Then `foreman start -f Procfile.dev`
In your command line. 

# Technologies Used 
1. React
3. Babel / JSX
4. Styled Componenets
5. Materialize for React
6. Ruby on Rails
7. PostgreSQL
8. Mongoose
9. Javascript 
10. Foreman 
11. Palleton
12. Axios 
13. React-youtube package 

# Biggest Problems 
The biggest problems I ran into was configuring my websockets with React and Rails. I had a hard time defining the subscription of a user when they logged in. Also Action Cable as a whole was my biggest issue. Obvsiously learning a new concept and tring to incorporate it into a project with a deadline can be challenging but Websockets were definetly the biggest source of my headaches this week.


# Links 
1. https://frozen-waters-14026.herokuapp.com/ - App on Heroku
2. https://trello.com/b/FeHxlHtK/streams-clone - User Stories 
3. https://docs.google.com/presentation/d/1eV9mvWXCuTL1H61spfkhcUon8mBlAalaS0Orx5RXzPQ/edit?usp=sharing - Wireframes & ERD

# Lessons Learned 
I learned a whole lot about web sockets and action cable and how Rails handles full duplex servers. I also learned user authentication using Devise which seemed simple enough but I have heard some issues people have with Devise I just havent had enough experience with it to figure out what those issues are. 

# Resources 
1. W3Schools 
2. MDN Web Docs 
3. Stackover Flow 
4. Previous Labs and Homeworks 
5. Rails docs 
6. Dakota Lillie  https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296

# Phase 2 
In Phase two I would like to get my websockets working as well as be able to display the actual users username in the chat instead of just their user Id. Secondly I would like to be able to set up live stream times of when users can submit Youtube links into the chat and have those automatically added to the Youtube playlist that is being live streamed. 
