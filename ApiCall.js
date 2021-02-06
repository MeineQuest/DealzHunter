function apiCall(url) {
    return UrlFetchApp.fetch(url, {followRedirects: false });
}