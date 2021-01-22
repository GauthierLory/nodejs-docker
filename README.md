# nodejs-docker

**myapp**: nom de l'image
**appnode**: nom du container

- création de l'image a partir du docker file
    - docker build -t **myapp** .

- vérifier que l'on a notre image 
    - docker image ls

- déclencher myapp
    - docker run -p 80:80 **myapp**

- utilisation du mode detach (en back ground)
    - docker run -d --name **appnode** -p 80:80 **myapp**

- récupérer l'accès au container
    - docker exec -it **appnode** sh

- informations sur les ressources
    - docker container stats **appnode**