credits: Makai Pindell
# bakify_v_backend
Automatically scans for analytical never words and provides synonymous terms to enhance your writing.

what do I need to do first?
- git clone/pull
- install node if have not yet
- type npm install in the terminal 
- make a .env file with your mongoose connection link
  - where can I find this?
    - make a mongoDB account
      - make a cluster
        - click on connect
          - click on connect your application
            - copy the link and paste it into your .env file as following (replace username and password with your own credentials):
            MONGO_URI=mongodb+srv://<username>:<password>database name goes here@cluster0.tdp5sjl.mongodb.net/?retryWrites=true&w=majority
- run the program with npm start
  - open the browser to localhost:5000 

what is unique about this version?
- has a node backend that uses express and mongoDB that receives the input from the textbox and sends that data as a json file to the backend using axios.
- where can I see the data?
  - localhost:5000/api/v1/passage
  - the database
