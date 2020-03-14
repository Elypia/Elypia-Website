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
helm install --name nginx-ingress stable/nginx-ingress --set rbac.create=true --set controller.publishService.enabled=true

# Install cert-manager
# https://cert-manager.io/docs/installation/kubernetes/
kubectl create namespace cert-manager
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.14.0/cert-manager.crds.yaml
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v0.14.0
