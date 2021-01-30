function checkForAvailability(response) {
    return (response.getContentText().indexOf("Nicht verfügbar") > -1)
}