# 🏥 Healthcare Management System

A comprehensive **Healthcare Management System** built with **Django + PostgreSQL** that enables seamless management of doctors and patients. This project provides secure authentication, CRUD operations for healthcare data, and RESTful APIs for easy integration.

## 🚀 Features

- 🔐 **User Authentication** – Secure register & login functionality (JWT/Django Auth)
- 👩‍⚕️ **Doctor Management** – Complete CRUD operations for doctor profiles
- 🧑‍🤝‍🧑 **Patient Management** – Comprehensive patient data management
- 📌 **Patient-Doctor Assignment** – Seamless linking of patients with doctors
- 🗄️ **PostgreSQL Integration** – Robust and reliable data storage
- 🌐 **REST API Endpoints** – Full API support for frontend or third-party integration
- 🔒 **Secure Data Handling** – Protected healthcare information management

## ⚙️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Backend** | Django, Django REST Framework |
| **Database** | PostgreSQL |
| **Authentication** | JWT / Django Authentication |
| **Environment** | Python Virtual Environment |
| **Configuration** | Environment Variables (.env) |

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8+ installed
- PostgreSQL installed and running
- Git installed

### 1. Clone the Repository

```bash
git clone https://github.com/aadarsharma/Healthcare-Django-Project.git
cd Healthcare-Django-Project
```

### 2. Create Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Database Configuration

#### Step 1: Create PostgreSQL Database

Open PostgreSQL command line or pgAdmin and run:

```sql
CREATE DATABASE healthcare_db;
```

#### Step 2: Configure Environment Variables

Create a `.env` file in your project root directory:

```env
# Database Configuration
DB_USER=postgres
DB_PASSWORD=your_postgresql_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=healthcare_db

# Django Configuration
SECRET_KEY=your_django_secret_key_here
DEBUG=True
```

> **Note:** Replace `your_postgresql_password` with your actual PostgreSQL password and generate a secure Django secret key.

### 5. Database Migration

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create Admin User

```bash
python manage.py createsuperuser
```

Follow the prompts to create your admin account.

### 7. Start the Development Server

```bash
python manage.py runserver
```

🎉 **Success!** Your application is now running at: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

**Admin Panel:** [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

## 📚 API Documentation

### 🔗 Base URL
```
http://127.0.0.1:8000/api/
```

### 👩‍⚕️ Doctor Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/doctors/` | Retrieve all doctors |
| `GET` | `/api/doctors/<id>/` | Retrieve specific doctor |
| `POST` | `/api/doctors/` | Create new doctor |
| `PUT` | `/api/doctors/<id>/` | Update doctor details |
| `DELETE` | `/api/doctors/<id>/` | Delete doctor |

### 🧑‍🤝‍🧑 Patient Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/patients/` | Retrieve all patients |
| `GET` | `/api/patients/<id>/` | Retrieve specific patient |
| `POST` | `/api/patients/` | Create new patient |
| `PUT` | `/api/patients/<id>/` | Update patient details |
| `DELETE` | `/api/patients/<id>/` | Delete patient |

### 📌 Assignment Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/assign/` | Assign patient to doctor |

## 📋 Usage Examples

### Creating a Doctor (POST Request)

```json
{
    "name": "Dr. John Smith",
    "specialization": "Cardiology",
    "email": "dr.smith@hospital.com",
    "phone": "+1-555-0123"
}
```

### Creating a Patient (POST Request)

```json
{
    "name": "Jane Doe",
    "age": 28,
    "gender": "Female",
    "phone": "+1-555-0456",
    "address": "123 Main St, City, State"
}
```

## ✅ Expected Outcomes

After successful setup, your Healthcare Management System will provide:

- ✅ **User Registration & Authentication** – Secure login system
- ✅ **Doctor Management** – Full CRUD operations for medical staff
- ✅ **Patient Management** – Comprehensive patient record handling
- ✅ **Assignment System** – Link patients with appropriate doctors
- ✅ **Data Security** – Protected storage in PostgreSQL database
- ✅ **API Integration** – RESTful endpoints for external applications

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aadarsh Sharma**
- GitHub: [@aadarsharma](https://github.com/aadarsharma)
- Project Link: [Healthcare-Django-Project](https://github.com/aadarsharma/Healthcare-Django-Project)
