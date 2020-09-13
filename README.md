This is the API to add the question with topics and tags and search them  on the basis of tags and topics

run:

    npm install
    
    #to install all dependencies
    
    npm start
    
    #to start the project

for insert command:

    send data as:
        question: string,
        topic: string,
        tag:JSON.stringify(array of tags)

    example:
        question: what is my name?
        topic: myself
        tag: JSON.stringify(["name","me"])

    response - 
        success will return with 200 code and message: "question submitted" adn the created question in JSON format
        failure will return with 500 internal server error and error will be passed

for search command:

    send data as:
        search: string
    
    example:
        search : usa

    response:
        success will return with 200 code and message: "successful , here is your data" and the created question in JSON format and "nothing found message if there is nothing matching
        failure will return with 500 internal server error and error will be passed
  

VIDEO LINK:
    https://drive.google.com/file/d/1oPcfqAf9w85RK5T7nPXfMozJ9Xb6vxzC/view?usp=sharing