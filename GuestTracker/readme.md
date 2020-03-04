### How to run

#### Database
- Create a user of following credentials
    - password: password
    - username: root
   
#### Spring Boot Application
- git clone https://github.com/UbaidurRehman1/animated-fortnight
- cd animated-fortnight
- cd GuestTracker
- mvn spring-boot:run

#### Rest APIs
- http://localhost:8000/admin/ (GET) all guests
- http://localhost:8000/admin/{id} (DELETE) a guest
- http://localhost:8000/admin/ (PUT) update a guest
- http://localhost:8000/admin/{id} (GET) a guest
- http://localhost:8000/user/ (POST) an entry

#### Security
- For admin
    - username is admin
    - Password is admin
 - For guest
    - username is guest
    - Password is guest



#### Todo
- [x] Rest APIs
- [x] Persistence (database storage)
- [x] USER Roles in Database
- [x] Implementing Security
- [ ] Adding UI