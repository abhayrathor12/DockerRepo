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
```bash
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
bash

cd frontend
npm install
npm start
Frontend runs on:



http:///13.232.138.111:3000
Deployed Application URL

