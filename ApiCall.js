function apiCall(url) {
    try {
        var response = UrlFetchApp.fetch(url, {followRedirects: false});
      return response; 
    } catch (e) {
  
      Logger.log(e)
      return "";
    }
  }