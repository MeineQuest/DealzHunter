function mailSend(gpu, body) {

    var mailAdress = spreadSheetIdMailAdress(mailAdress);
  
    for (var mail = 2; mail < 50; mail++) {
      var recipient = mailAdress.getRange(mail, 2).getValue();
      if (recipient == "") {
        break;
      }
      GmailApp.sendEmail(recipient, gpu, body)
    }
  }