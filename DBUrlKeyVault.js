const { SecretClient } = require("@azure/keyvault-secrets");

async function getDBUrl(callback) {

    const keyVaultName = "keyVaultsForSecureCreds";
    const KVUri = "https://" + keyVaultName + ".vault.azure.net";
  
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(KVUri, credential);
  
    const retrievedSecret = await client.getSecret("databaseCredentials");
  
    console.log("Your secret is '" + retrievedSecret.value + "'.");

    callback(retrievedSecret);
  }
  
  //main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));

  module.exports.getDBUrl = getDBUrl;