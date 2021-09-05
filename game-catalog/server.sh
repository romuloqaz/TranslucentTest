mvn clean package -DskipTests
sudo docker build -t game-catalog .
sudo docker-compose up
