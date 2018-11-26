const XeroClient = require('xero-node').AccountingAPIClient;

const config = require('./config/config.json');

const xeroConfig = {
    ...config.xero,
    appType: 'private',
    privateKeyPath: __dirname + '/config/xero.pem'
};

const client = new XeroClient(xeroConfig);

async function main() {
    const journals = await client.journals.get();
    console.log(journals);
}

main()
    .catch(err => console.error(err));
