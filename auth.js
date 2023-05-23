const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

const getGoogleService = () => {
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });
  const service = google.sheets({version: 'v4', auth});
  return service;
}

module.exports = {
  getGoogleService,
}
