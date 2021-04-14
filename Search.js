function search() {

    var webShop = spreadSheetIdWebShop(webShop);
  
    for (var i = 2; i < 50; i++) {
      var url = webShop.getRange(i, 1).getValue();
      var gpu = webShop.getRange(i, 12).getValue();
      Logger.log("--------------- NEW SEARCH ---------------")
      Logger.log("------------------------------------------")
      Logger.log("GPU NAME " + gpu);
      var valueShop = webShop.getRange(i, 11).getValue();
      if (url == "") {
        break;
      }
      try {
        var response = apiCall(url);
        if (checkForAvailability(response)) {
          Logger.log(gpu + " is not in the " + valueShop + " available! ");
        }
        else {
          var body = (gpu + " is in the " + valueShop + " available! " + url + " Don't forget the discount code MONSTER ");
          Logger.log(body);
          saveAsJSON(response, gpu);
          mailSend(gpu, body);
          discordMessageSend(body);
        }
      }
      catch (e) {
        Logger.log("ErrorMessage" + e);
       }
  
    }
  }