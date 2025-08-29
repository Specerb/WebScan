import httpx
import ssl
from urllib.parse import urlparse

def check_ssl(url: str):
    try:
        hostname = urlparse(url).hostname
        context = ssl.create_default_context()
        with context.wrap_socket(
            ssl.SSLSocket(), server_hostname=hostname
        ):
            return {"ssl_valid": True}
    except Exception:
        return {"ssl_valid": False}

def check_https(url: str):
    return {"https_enforced": url.startswith("https://")}

def check_headers(url: str):
    try:
        r = httpx.get(url, timeout=5)
        headers = r.headers
        required = ["Strict-Transport-Security", "Content-Security-Policy", "X-Frame-Options"]
        results = {}
        for h in required:
            results[h] = h in headers
        return results
    except Exception:
        return {"headers_checked": False}

