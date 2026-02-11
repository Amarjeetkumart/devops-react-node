#!/bin/bash

set -e

echo "Stopping old containers..."
sudo docker stop backend || true
sudo docker rm backend || true
sudo docker stop frontend || true
sudo docker rm frontend || true

echo "Creating network..."
sudo docker network create app-network || true

echo "Logging into ECR..."
aws ecr get-login-password --region ap-south-1 | \
sudo docker login --username AWS --password-stdin 732132791905.dkr.ecr.ap-south-1.amazonaws.com

echo "Pulling latest images..."
sudo docker pull 732132791905.dkr.ecr.ap-south-1.amazonaws.com/node-backend:latest
sudo docker pull 732132791905.dkr.ecr.ap-south-1.amazonaws.com/react-frontend:latest

echo "Starting backend..."
sudo docker run -d \
  --name backend \
  --network app-network \
  -p 5000:5000 \
  732132791905.dkr.ecr.ap-south-1.amazonaws.com/node-backend:latest

echo "Starting frontend..."
sudo docker run -d \
  --name frontend \
  --network app-network \
  -p 80:80 \
  732132791905.dkr.ecr.ap-south-1.amazonaws.com/react-frontend:latest

echo "Deployment complete!"
