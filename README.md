# Flask Backend & Express Frontend Deployment on AWS EC2

##  Overview
This project demonstrates how to deploy a Flask backend and an Express (Node.js) frontend on a single AWS EC2 instance using the AWS Free Tier.

The goal of this setup is to run both backend and frontend services on the same EC2 machine while exposing them through a public IP address.

---

## Tech Stack
- **Backend: Flask (Python)
- **Frontend: Express.js (Node.js)
- **Cloud Provider: Amazon Web Services (AWS)
- **Compute Service: EC2 (Ubuntu – Free Tier)
- **Process Manager: PM2 / Screen (optional)

---

##  Deployment Architecture
- One EC2 instance
- Flask running on one port (e.g. `5000`)
- Express running on another port (e.g. `3000`)
- Accessed via EC2 Public IPv4 Address

---

##  Project Structure
project-root/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│
├── frontend/
│ ├── package.json
│ ├── server.js
│
├── README.md

yaml


---

##  Prerequisites
- AWS account (Free Tier)
- Ubuntu EC2 instance
- Python 3.x
- Node.js & npm
- Git

---

## 🔧 EC2 Setup Steps

###  Launch EC2 Instance
- OS: Ubuntu (Free Tier)
- Open inbound ports:
  - `22` – SSH
  - `3000` – Express frontend
  - `5000` – Flask backend

---

###  Install Required Packages

sudo apt update
sudo apt install python3-pip git -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y
 Clone Repository
bash

git clone https://github.com/abhayrathor12/DockerRepo.git
cd DockerRepo
Running the Application
Backend (Flask)

cd backend
pip3 install -r requirements.txt
python3 app.py
Backend runs on:



http://13.232.138.111:5000
 Frontend (Express)


cd frontend
npm install
npm start
Frontend runs on:



http:///13.232.138.111:3000
Deployed Application URL













Flask Backend & Express Frontend Deployment on AWS ECS

This project demonstrates how to containerize and deploy a Flask backend and an Express frontend using Docker, AWS ECR, ECS (Fargate), Application Load Balancer, and VPC.

 Architecture Overview
User
  │
 
Application Load Balancer (HTTP : 80)
  │
  
ECS Fargate (Express Frontend – Port 3000)
  │
  
ECS Fargate (Flask Backend – Port 5000)

Tech Stack

Backend: Flask (Python)

Frontend: Express.js (Node.js)

Containerization: Docker

Cloud Services:

AWS ECR (Elastic Container Registry)

AWS ECS (Fargate)

Application Load Balancer

VPC & Security Groups

Repository Structure
.
├── Backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── Frontend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
└── README.md

 Dockerization
Backend Dockerfile (Flask)
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000
CMD ["python", "app.py"]

Frontend Dockerfile (Express)
FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]

 AWS ECR Setup

Created two ECR repositories

flask-backend

express-frontend

Built & pushed images:

docker build -t flask-backend .
docker tag ecrfront:latest 210362853400.dkr.ecr.ap-south-1.amazonaws.com/ecrfront:latest
docker push 210362853400.dkr.ecr.ap-south-1.amazonaws.com/ecrfront:latest



Same steps for backend

ECS Deployment (Fargate)
ECS Cluster

Cluster Type: AWS Fargate

Cluster Name: dockerdeploy1

Task Definitions
Service			Port	
Flask Backend		5000	
Express Frontend	3000	

Target Groups

Service	Target Type	Port
Frontend	IP	3000
Backend	IP	5000




 Fargate requires target type = IP

ECS Services

Frontend Service

Attached to Application Load Balancer

Listener: HTTP : 80

Target Group: frontend-tg-ip

Backend Service

Internal service

Accessible only from frontend

 Security Groups
Load Balancer SG

Allow HTTP (80) from 0.0.0.0/0

Frontend ECS SG

Allow port 3000 from ALB SG

Backend ECS SG

Allow port 5000 from Frontend SG

Deployed Application URL
http://ecs-alb-66959023.ap-south-1.elb.amazonaws.com/


