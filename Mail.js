function mailSend(gpu, body) {

    var mailAdress = SpreadsheetApp.openById("1ANDzVvEimOsTN-obrJmdNWYZcm4pRJuTLbbLbs6Pgu8").getSheetByName("Mail Adress");

    for (var mail = 2; mail < 50; mail++) {
        var recipient = mailAdress.getRange(mail, 2).getValue();
        if (recipient == "") {
            break;
        }
        GmailApp.sendEmail(recipient, gpu, body)

    }

}