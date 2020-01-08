const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

getChildren = (req, res) => {
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
        spreadsheetId: process.env.SHEETS_SPONSOR_ID_LOC,
        range: 'Sponsor!A2:J11'
    }, ((err, result) => {
        if (err) console.log(err);
        const rows = result.data.values;
        if (rows.length) {
            try {
                rows.map(row => {
                    return {
                        name: `${row[0]}`,
                        age: `${row[1]}`,
                        birthday: `${row[2]}`,
                        sport: `${row[3]}`,
                        school: `${row[4]}`,
                        village: `${row[5]}`,
                        color: `${row[6]}`,
                        grade: `${row[7]}`,
                        career: `${row[8]}`,
                        id: `${row[9]}`,
                        isSponsor: `${row[10]}`
                    };
                });
                return res.status(200).send({success: true, child: rows})
            } catch (err) {
                console.log('error in api callback: ' + err)
            }
        }
        else {
            return res.status(200).send({success: false, error: 'No Data'})
        };
    }))
}

module.exports = getChildren;