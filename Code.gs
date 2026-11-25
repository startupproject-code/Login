const SPREADSHEET_ID = '1i4SgYMJk-sHhiCVYSVJEmZLCG_YEuW86UoZiXrHi0Ug';
const SHEET_NAME = 'Accounts';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Login | Hello World')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Validate credentials against the Accounts sheet on the server. */
function validateLogin(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') return false;

  const normalizedUsername = username.trim();
  if (!normalizedUsername || !password) return false;

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) return false;

  // Row 1 is the header; columns A and B contain username and password.
  const accounts = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getDisplayValues();
  return accounts.some(([storedUsername, storedPassword]) =>
    storedUsername.trim() === normalizedUsername && storedPassword === password
  );
}
