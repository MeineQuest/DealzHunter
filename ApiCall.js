function apiCall(url) {
    return UrlFetchApp.fetch(url, {muteHttpExceptions: true, followRedirects: false });
}