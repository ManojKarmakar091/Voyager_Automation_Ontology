
var envs = {  }

process.argv.slice(2).forEach(arg=>{
    var [key,value] = arg.split("=")
    envs[key] = value || true
})


if (envs["--NODE_ENV"] == "DEV")
{
  const envConfig = {
    endpoint: "https://vca-dev-westus2-db.documents.azure.com:443/",
  key: "fQNP6FpfiVr6sdK6fGLVDOuO5rD09nPri31S4NiVHLBusa3K4VOTk5CxtXFpNBJZyyrtFgwsjGhsNm7QJF1N5A==",
  hostname: "https://voyager.azurefd.net/service/dev/",
    hostname_Ontology_QA: "https://voyager.azurefd.net/service/qa/", 
    hostname_Ontology_UAT: "https://voyager.azurefd.net/service/uat/", 
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




