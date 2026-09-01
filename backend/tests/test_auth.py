"""
AgroMind AI - Authentication API Unit Tests
"""


def test_health_endpoint(client):
    """Test health check returns status 200 and phase 3 status."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["phase"] == 3


def test_user_registration_and_login(client):
    """Test user registration flow followed by JWT login authentication."""
    # 1. Register User
    reg_payload = {
        "full_name": "Test Farmer",
        "email": "testfarmer@agromind.ai",
        "password": "Password123!",
    }
    response = client.post("/api/v1/auth/register", json=reg_payload)
    assert response.status_code == 201
    user_data = response.json()
    assert user_data["email"] == "testfarmer@agromind.ai"
    assert "id" in user_data

    # 2. Login User
    login_payload = {
        "email": "testfarmer@agromind.ai",
        "password": "Password123!",
    }
    login_res = client.post("/api/v1/auth/login", json=login_payload)
    assert login_res.status_code == 200
    token_data = login_res.json()
    assert "access_token" in token_data
    assert token_data["token_type"] == "bearer"
