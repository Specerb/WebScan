from fastapi import FastAPI
from scanner import check_ssl, check_https, check_headers

app = FastAPI(title="WebScan API")

@app.get("/scan")
def scan(url: str):
    results = {}
    results.update(check_ssl(url))
    results.update(check_https(url))
    results.update(check_headers(url))
    return {"url": url, "results": results}

