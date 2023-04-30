# Changelog

##### Planned changes
- Integrate the sentence database with the backend server.
- Implement the means to perform a request for a sample sentence and display the result (strictly for testing the communication).
- Move the components behind an API Gateway
 
##### 30-04-2023
###### Added
- Frontend
    - Dockerfile
    - Main web interface page layout
    - Search bar
- Backend
    - Dockerfile
    - Flask development sever (very minimal)
    - Simple request to test component communication
- Infrastructure
    - Docker compose configuration for the two containers

#### Current status
The compose configuration runs the node frontend and the flask backend. Accesing the frontend presents the user with a search bar through which they may perform requests to the backend. As of now, the backend only replies with response code 200 if the message was sent correctly and doesn't do anything else.

Another aspect is that the frontend server doesn't communicate to the backend internally, within the docker network, but rather through localhost:<backend-port>. That is because React runs in the browser and is "unaware" of the docker network configuration.
