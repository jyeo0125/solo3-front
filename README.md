# solo3 Project
# Personal Note ver#2

## Summary of the App

    The goals of the application is the same as solo project2. However, I will fix and add several fuctions in to solo project3. 

## User story
* Users must creat the account for using this application and Login is mendetory.
* A logined user can creat the post which include title and contents
* The application has a Navbar(flexible) for users' convienence.
* User can edit the own posts' title and content and user profile.
* User do not need to re-login for using this application after page-refresh. 
## MDR
![picture](../img/mdr.png)


## Wire-Frame
![picture](../img/wire.png)
## MVP
* Create user 
* Login user
* User verify function
* Post must save in Local server and each post has store with userId
* Edit and delete each post
* Edit user profile
* Better CSS than previous project
  
## Extra goal
* search Bar for all post Page
* animate background
  

## Route
* app.get(/posts/:userId)
* app.post(/users)
* app.post(/users/login)
* app.put(/users/:id)
* app.put(/posts/:id)
* app.delete(/users/:id/delete/postid)  