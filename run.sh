cd GuestTracker
mvn clean package -DskipTests
cd ..
docker-compose up --build