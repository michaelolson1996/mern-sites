const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

getProjects = (req, res) => {
    const oAuth2Client = new OAuth2(
        process.env.SHEETS_ID,
        process.env.SHEETS_SECRET,
        process.env.G_AUTH_URL
    );

    oAuth2Client.setCredentials({
        refresh_token: process.env.SHEETS_RT
    });

    oAuth2Client.generateAuthUrl({
        access_type: 'online',
        scope: process.env.SHEETS_SCOPE,
    });

    const sheets = google.sheets({version: 'v4', auth: oAuth2Client});
    sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEETS_PROJECTS_ID_LOC,
        range: 'Projects!A2:E4'
    }, ((err, result) => {
        if (err) console.log(err);
        const rows = result.data.values;
        if (rows.length) {
            try {
                rows.map(row => {
                    return {
                        name: `${row[0]}`,
                        description: `${row[1]}`,
                        cost: `${row[2]}`,
                        savings: `${row[3]}`,
                        image: `${row[4]}`
                    };
                });

                return res.status(200).send({success: true, projects: rows})
            } catch (err) {
                console.log('error in api callback: ' + err)
            }
        }
        else {
            return res.status(200).send({success: false, error: 'No Data'})
        };
    }))
}

module.exports = getProjects;