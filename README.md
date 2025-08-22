Healthcare Django Project

A healthcare management system built with Django + PostgreSQL.
This project allows:

User registration & login.

Doctors & patients management.

Assigning patients to doctors.

Secure data storage in PostgreSQL.

🚀 Features

✅ User Authentication (Register/Login)
✅ CRUD for Doctors & Patients
✅ Assign Patients to Doctors
✅ PostgreSQL Database Integration
✅ Django REST Framework APIs

⚙️ Tech Stack

Backend: Django, Django REST Framework

Database: PostgreSQL

Authentication: JWT/Django Auth

Environment Management: .env file

🛠️ Setup Instructions
1. Clone Repository
git clone https://github.com/sanikakharade/Healthcare-Django-Project.git
cd Healthcare-Django-Project

2. Create & Activate Virtual Environment
python -m venv venv
venv\Scripts\activate     # On Windows
source venv/bin/activate  # On Mac/Linux

3. Install Dependencies
pip install -r requirements.txt

4. Setup PostgreSQL Database
Step 1: Install PostgreSQL

Download PostgreSQL
 and install.

During installation, set a password for the postgres user (remember this for .env).

Step 2: Create Database

Open psql shell or use pgAdmin:

CREATE DATABASE healthcare_db;

Step 3: Update .env file

Create a .env file in your project root:

DB_USER=postgres
DB_PASSWORD=your_password_here
DB_HOST=localhost
DB_PORT=5432
DB_NAME=healthcare_db
SECRET_KEY=your_secret_key_here
DEBUG=True

5. Run Migrations
python manage.py makemigrations
python manage.py migrate

6. Create Superuser
python manage.py createsuperuser

7. Run Server
python manage.py runserver


Now visit 👉 http://127.0.0.1:8000/admin/

📌 API Endpoints
Doctors

GET /api/doctors/ → Retrieve all doctors

GET /api/doctors/<id>/ → Get details of a specific doctor

POST /api/doctors/ → Create doctor

PUT /api/doctors/<id>/ → Update doctor details

DELETE /api/doctors/<id>/ → Delete doctor record

Patients

GET /api/patients/ → Retrieve all patients

POST /api/patients/ → Create patient

PUT /api/patients/<id>/ → Update patient details

DELETE /api/patients/<id>/ → Delete patient record

Assign Patient to Doctor

POST /api/assign/ → Assign patient to doctor

✅ Expected Outcome

Users can register & log in.

Authenticated users can add/manage patient & doctor records.

Patients can be assigned to doctors.

Data is securely stored in PostgreSQL.
