function discordMessageSend(body) {

    var discordServerHook = SpreadsheetApp.openById("1ANDzVvEimOsTN-obrJmdNWYZcm4pRJuTLbbLbs6Pgu8").getSheetByName("WebHook");
  
    var message = body;
    
    var payload = JSON.stringify({content: message});
    var params = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      payload: payload,
      muteHttpExceptions: true
    };
  
    for (var webHookCounter = 2; webHookCounter < 50; webHookCounter++) {
      var discordUrl = discordServerHook.getRange(webHookCounter, 1).getValue();
      if (discordUrl == "") {
        break;
      }
      var response = UrlFetchApp.fetch(discordUrl, params);
      Logger.log(response.getContentText());
    }
  
  
  }