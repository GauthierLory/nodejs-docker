# nodejs-docker

myapp: nom de l'application

-création de l'image a partir du docker file
docker build -t myapp .

-vérifier que l'on a notre image 
docker image ls

-déclencher myapp
docker run -p 80:80 myapp