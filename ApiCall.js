function apiCall(url) {
  try {
    var response = UrlFetchApp.fetch(url, { followRedirects: false });
    var responseCode = response.getResponseCode()

    if (responseCode === 200) {
      //Logger.log("Response Code " + response.getResponseCode());
      return response;
    } else { 
      Logger.log("Failure Response Code " + response.getResponseCode());
      return response;
    };
  }
  catch (e) {
    Logger.log(e)
    Logger.log(response)
  }
}