module.exports = async function handler(req, res) {
    if (req.method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "*");
        return res.status(204).end();
    }

    const { url } = req.query || {};
    if (!url || typeof url !== "string") {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.status(400).send("Missing url parameter");
    }

    let parsedUrl;
    try {
        parsedUrl = new URL(url);
    } catch {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.status(400).send("Invalid url");
    }

    const isHttp = parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
    const isAllowedHost = parsedUrl.hostname === "tienda.mercadona.es";
    const isAllowedPath = parsedUrl.pathname.startsWith("/api/");

    if (!isHttp || !isAllowedHost || !isAllowedPath) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.status(403).send("Forbidden url");
    }

    try {
        const upstream = await fetch(parsedUrl.toString(), {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; DV-Shop/1.0)",
                "Accept": "application/json,text/plain,*/*",
                "Accept-Encoding": "identity"
            }
        });

        const body = await upstream.text();
        const contentType = upstream.headers.get("content-type") || "application/octet-stream";

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
        res.setHeader("Content-Type", contentType);
        return res.status(upstream.status).send(body);
    } catch (error) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.status(502).send(error instanceof Error ? error.message : "Proxy request failed");
    }
};
