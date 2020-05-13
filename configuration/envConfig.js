
var envs = {  }

process.argv.slice(2).forEach(arg=>{
    var [key,value] = arg.split("=")
    envs[key] = value || true
})


if (envs["--NODE_ENV"] == "DEV")
{
  const envConfig = {
    endpoint: "https://mvh-dev-westus2-db.documents.azure.com:443/",
    key: "ynLai8P5HifMZkO8fK6IUX3kdNkr7JgoiALGYAcf90Vps3Bfun4stVAX343ezqr9pTSv9YtRV2vAILLJ3NO1Tw==",
    hostname: "https://voyager.azurefd.net/service/dev/",  
    hostname_Ontology: "https://voyager.azurefd.net/service/qa/", 
  };
  module.exports = envConfig;
}
else if (envs["--NODE_ENV"] == "QA")
{

const envConfig = {
  endpoint: "https://mvh-qa-westus2-db.documents.azure.com:443/",
  key: "XIg5KrhJe23qks1RbiBeN2hDjt4q4LsT62WSY4sjnjVtD4holNFZDTvVYg03ofukB6ltLMFgSHzc1tp3Poa00Q==",
  hostname: "https://voyager.azurefd.net/service/qa/",

};
module.exports = envConfig;
}




