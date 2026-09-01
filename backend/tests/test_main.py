"""
AgroMind AI - Application Entrypoint Unit Tests
"""


def test_health_check(test_client):
    """
    Test health check endpoint returns 200 OK and expected app metadata.
    """
    response = test_client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["application"] == "AgroMind AI"
    assert data["phase"] == 1
