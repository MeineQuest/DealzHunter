function apiCall(url) {
  try {
    var response = UrlFetchApp.fetch(url, { followRedirects: false });
    var responseCode = response.getResponseCode()

    if (responseCode === 200) {
      Logger.log("ResponseCode " + response.getResponseCode());
      return response;
    } else {
      Logger.log("Failure ResponseCode " + response.getResponseCode());
    };
  }
  catch (e) {
    Logger.log(e)
    Logger.log(response)
  }
}