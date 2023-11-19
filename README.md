# Movies


A project consisting of two applications:

- Movies api (Django REST API for managing movie data in a PostgreSQL database). The database already contains a collection of movies.

- Movies app (A simple React app that retrieves and displays a list of movies from the API).

<br/><br/>

## How to run (test environment)

```
docker compose up -d  


```



### Get a list of all movies (GET):
```
curl http://localhost:8000/api/movies/
```

```json
  {
        "id": 1,
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994
    }
```


### Display of movie list (movies app):
```
http://localhost:3000/
```

<br/><br/>
---

## How to run (production environment)

The app and api services are exposed to the internet using Ingress. Before running the following command your kubernetes cluster must have an ingress controller e.g. ingress-nginx

The public ip address assigned to the ingress controller must be added as new A records for your own domain

In the ingress.yaml, api-configmap.yaml and app-configmap.yaml, cluster-issuer.yaml files, change the domain name

```

#Create an ingress controller

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install ingress-nginx ingress-nginx/ingress-nginx \
  --create-namespace \
  --namespace ingress-basic \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/azure-load-balancer-health-probe-request-path"=/healthz


# Use TLS with an ingress controller

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.13.2 \
  --set installCRDs=true

# create resources

kubectl apply -f . 


```

