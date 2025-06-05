## Sobre o projeto

Este repositório visa demonstrar conceitos relacionados aos processos de CI/CD e DevOps.

## Build e run

Para rodar a aplicação localmente utilize os seguintes comandos:

```
npm i
npm run build
npm run start
```

## Docker

Para gerar a imagem docker dessa aplicação e rodá-la utilize os seguintes comandos:

```
sudo docker build -t app_js:latest .
sudo docker run -p 3002:3002 -d app_js:latest
```

## Testes

Para rodar os testes unitários da aplicação utilize o comando:

```
npm run test
```
