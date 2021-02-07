# k8s-project-on-minikube

## Multiple containers - NodeJs server, React UI, Redis cache, Postgres DB, Worker are deployed on k8s cluster using minikube

## ingress-nginx has been used to create Ingress controller

## Setup the minikube cluster on the machine

### To run this project locally, need to create a secret imperatively named "pgpassword" and key as PG_PASSWORD with any value.

### kubectl apply -f k8s

#### This will create a Deployments, PODS, Services, Ingress controller, Persistent Volume Claim on minikube cluster
