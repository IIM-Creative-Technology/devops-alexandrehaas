# CI/CD avec github action, heroku et déploiement sur VPS

Ce projet est le début de mon site personnel créer avec Gatsby.

La mise en place de cette CI/CD va me permettre de gagner beaucoup de temps sur les tests et déploiements du site.

Lien Prod : [alexandrehaas.fr](https://alexandrehaas.fr/)
Lien PréProd : [preprod-alexandrehaas.herokuapp.com](https://preprod-alexandrehaas.herokuapp.com/)

## CI Sur les pull requests

A chaque pull request sur la branche [master](https://github.com/IIM-Creative-Technology/devops-alexandrehaas/tree/master) ou [preprod](https://github.com/IIM-Creative-Technology/devops-alexandrehaas/tree/preprod), un lint est éffectué sur le code afin de vérifier sa conformité.

## CD au merge / push sur preprod

Lorsque la pull request est validée, le merge déclenche un lint puis déploie directement sur [Heroku](https://dashboard.heroku.com/apps). Le build du site se fait directement sur Heroku via le **buildpack node** ainsi que le **buldpack static** afin de définir le poit d'entré du site une fois compilé grâce au fichier **static.json**.

## CD au merge / push sur master

Lorsque la pull request est validée, le merge déclenche un lint, ensuite la cli de gatsby va builder le site afin de pouvoir le déployer sur mon VPS via SCP grâce à l'action [SCP Files](https://github.com/marketplace/actions/scp-files). SCP Files va donc récupérer mon dossier public, le compresser, l'envoyer au VPS puis le décompresser dans le dossier de mon site configuré sur NGINX.

## Utilisation

Pour que les Github Actions fonctionnent il faut avoir configuré les **secrets** suivants :

```yml
# fichier deploy-master.yml
HOST: ${{ secrets.HOST }}
USERNAME: ${{ secrets.USERNAME }}
PORT: ${{ secrets.PORT }}
KEY: ${{ secrets.SSHKEY }}

# fichier deploy-preprod.yml
heroku_api_key: ${{secrets.HEROKU_API_KEY}}
heroku_app_name: ${{secrets.HEROKU_APP}}
heroku_email: ${{secrets.HEROKU_EMAIL}}
```
