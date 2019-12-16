#!/bin/bash
# This needs to be applied to configure our GKE Kubernetes
# cluster before we apply our configuration.

# Initialize Helm / Tiller
# https://cloud.google.com/community/tutorials/nginx-ingress-gke#installing_tiller_with_rbac_enabled
# After this is completed, wait and ensure tiller has finished deploying before proceeding.
kubectl create serviceaccount tiller --namespace kube-system
kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount kube-system:tiller
helm init --service-account tiller
helm repo update

# Install nginx-ingress
# https://cloud.google.com/community/tutorials/nginx-ingress-gke#deploy_nginx_ingress_controller_with_rbac_enabled
helm install stable/nginx-ingress --name nginx-ingress --set rbac.create=true --set controller.publishService.enabled=true

# Install cert-manager
# https://cert-manager.io/docs/installation/kubernetes/

# Google Kubernetes Engine Specific - Configure Self as Cluster Admin
kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $(gcloud config get-value core/account)

kubectl create namespace cert-manager
kubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.12/deploy/manifests/00-crds.yaml --validate=false
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install jetstack/cert-manager --version v0.12.0 --name cert-manager --namespace cert-manager
