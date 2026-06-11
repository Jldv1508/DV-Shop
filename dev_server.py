import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import ssl
import urllib.error
from urllib.parse import parse_qs, urlparse
from urllib.request import Request, urlopen


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path in ("", "/", "/index.html"):
            self.path = "/dv-shop.html"
            return super().do_GET()

        if parsed.path == "/__proxy":
            qs = parse_qs(parsed.query)
            url = (qs.get("url") or [None])[0]
            if not url:
                self.send_response(400)
                self.send_header("Content-Type", "text/plain; charset=utf-8")
                self.end_headers()
                self.wfile.write(b"Missing url parameter")
                return

            try:
                context = ssl._create_unverified_context()
                req = Request(
                    url,
                    headers={
                        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari",
                        "Accept": "application/json,text/plain,*/*",
                        "Accept-Encoding": "identity",
                    },
                    method="GET",
                )
                try:
                    with urlopen(req, timeout=25, context=context) as resp:
                        status = resp.status
                        body = resp.read()
                        content_type = resp.headers.get("Content-Type") or "application/octet-stream"
                except urllib.error.HTTPError as http_error:
                    status = http_error.code
                    body = http_error.read()
                    content_type = http_error.headers.get("Content-Type") or "text/plain; charset=utf-8"

                self.send_response(status)
                self.send_header("Content-Type", content_type)
                self.end_headers()
                self.wfile.write(body)
            except Exception as exc:
                msg = str(exc).encode("utf-8", errors="replace")
                self.send_response(502)
                self.send_header("Content-Type", "text/plain; charset=utf-8")
                self.end_headers()
                self.wfile.write(msg)
            return

        return super().do_GET()


def main():
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "8000"))
    server = ThreadingHTTPServer((host, port), Handler)
    print(f"DV Shop server running on http://{host}:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
