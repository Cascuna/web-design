
# content

## Description
This forum is aimed towards technology students and other tech invested people interested in starting a discussion with their fellow programmers. Where stack-overflow aims towards problem solving, this will aim to a more casual approach, chatting and sharing your information, finding people with skills you could need for a project etc. The accesibility of this project is devoted to a special kind of person, a **real person**, larissa & Dennis. Continue reading to find out why :grimacing:

### My users
- Larissa She's visually impaired which makes using day-to-day web applications allot more difficult. From her introduction she mentions that she has allot of trouble using by the school supplied systems, which are visually attractive but appearantly not designed with Accesibility in mind. 
- Dennis The "average joe" back-ender. Enjoys flashy designs together with clear clickable interfaces, but is **very** picky when it comes to what he likes.


## Requirements
[`Python`](https://www.python.org/),  v3.4+ since these have pip by default   
`Pip` v1.8+  
[`Virtualenv`](https://virtualenv.pypa.io/en/stable/)   
Unix subsystems:  ```Pip install virtualenv```   
Windows : ```py -m pip install virtualenv```

## Getting started (manually)
### Unix subsystems
1. ```virtualenv venv``` in the main folder
2. ```source venv/bin/activate```
3. ```pip install -r requirements.txt```   
Now you can start the app 

### Windows
1. ```py -m virtualenv venv``` in the main folder
2. ```call venv/Scripts/activate``` 
3. ```pip install -r requirements.txt```   
Now you can start the app 
### Starting the app
It's recommended you always do ``python src/manage.py migrate`` to ensure your
database reflects all changes in the migrations before
starting the server by ```python src/manage.py runserver```

Once you have started the server, you can visit the forum on localhost:8000
## Features

## Components
- Threads
    - thread responses  
    Making it easy and quick to respond, with seeing instant feedback could increase the engagement of the average user.
    - Ability to create new threads  
    This should be as clear as possible without it being the primairy vocal point. Somewhere above the list of threads.
- Users
    - Users Profile  
    Being able to see atleast people their description and offline/online status at all times could create a stimuli for users to engage in a discussion faster.
    - gebruiker list 
    This one seems like 'just extra data'. Debatable wheter it's needed.
- Messages
    - liked messages  
    Being able to influence the overall sentiment around a message should be reflected in that these messages will be easier to find.
    - Start messages of a thread  
    These messages are really important, they dictate the direction of the discussion. It might be valueable to append messages to the card of the 'thread list'
- Categories  
  Making categories easy to browse and insightful without it visually overloading users could help them to narrow their search rather quickly.

## views
This project has taken a different approach, by introducing a different Design than your original "Forum"

     
# user stories
- Tech oriented users want to read about a category of interest so they can gather more information about said topic
- Larissa wants to navigate throughout the website without allot of 'textual clutter' so she can browse through the content without wasting time
- Tech oriented users want to view a users profile so they can see where a user is active, what thei rpersonal intrests are and other data from users.
- Tech oriented users want to see what threads are 'trending', new, and mostlyd discussed so they can get a feel for what the community thinks about
- larissa wants to be able to comment with ease without being hindered by the wysiwyg editor so she can contribute to the community
- Normal wants to be able to comment so they can contribute to the community 

## Feedback from Larissa 25 April 2018
- Make the detail view escapeable with the escape key
- Fix the heading structure (2 h1's in the menu, h3 for the introduction text etc.)


## Feature List
- Listview of all threads
- Being able to select categories to view the threads of
- See the discussion of a thread!
- Interact with the user panel

## Todo list
As this project is a partly conversion of a [older]() projec, there are still quite a few views to work on
- [ ] Revamp the user profile 
- [ ] Revamp the 'edit yourself' view
- [ ] Prettier forms
- [ ] Custom login screens etc
