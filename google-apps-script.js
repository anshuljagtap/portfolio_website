// Google Apps Script for Contact Form
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the form data
    const formData = e.parameter;
    const name = formData.name || '';
    const email = formData.email || '';
    const subject = formData.subject || '';
    const message = formData.message || '';
    const timestamp = new Date();
    
    // Add the data to the sheet
    sheet.appendRow([name, email, subject, message, timestamp]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to test the script
function doGet() {
  return ContentService.createTextOutput('Contact Form API is running!');
} 