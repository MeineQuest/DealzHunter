function discordMessageSend(body) {

  var discordServerHook = spreadSheetIdDiscordServerHook(discordServerHook);
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
    var discordUrl = discordServerHook.getRange(webHookCounter, 2).getValue();
    if (discordUrl == "") {
      break;
    }
    UrlFetchApp.fetch(discordUrl, params);
  }
}