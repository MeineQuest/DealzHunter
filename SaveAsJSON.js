function saveAsJSON(response, gpu) {
    var blob, file, fileSets;

    var data = JSON.stringify(response.getContentText());
    var parsedData = JSON.parse(data);
    var date = Utilities.formatDate(new Date(), "GMT+1", "dd/MM/yyyy HH:mm:ss");
    
    fileSets = { title: (gpu + " | " + date), mimeType: 'application/json' };
    blob = Utilities.newBlob(JSON.stringify(parsedData), "application/vnd.google-apps.script+json");
    file = Drive.Files.insert(fileSets, blob);
    Logger.log('ID: %s, File size (bytes): %s, type: %s', file.id, file.fileSize, file.mimeType, file.createdDate);
}