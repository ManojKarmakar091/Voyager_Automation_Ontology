const envConfig = require("../configuration/envConfig");


const OntologyConfig = {
  endpoint: envConfig.endpoint,
  key: envConfig.key,
  hostname: envConfig.hostname,
  hostname_Ontology_QA: envConfig.hostname_Ontology_QA,
  hostname_Ontology_UAT: envConfig.hostname_Ontology_UAT,
  SearchNameIndividual_EndPoint: "/ontologysearch/v1/api/ontology/search/individual",
  SuggestIndividualSearch_EndPoint:"/ontologysearch/v1/api/ontology/search/individual/suggest",
  SuggestAnimalType_EndPoint: "/ontologysearch/v1/api/ontology/search/individual/animal/suggest",
  SearchAnimalType_EndPoint: "/ontologysearch/v1/api/ontology/search/individual/animal",
  ClassSuggest_EndPoint: "/ontologysearch/v1/api/ontology/search/class/suggest",
  ClassSearch_EndPoint: "/ontologysearch/v1/api/ontology/search/class/",

  selectQuery_common: 'SELECT * from c WHERE c.name = ',
  selectQuery_client: 'SELECT * from c WHERE c.clientid = ',
  selectQuery_pet: 'SELECT * from c WHERE c.petid = ',


    //OntologyDB
    databaseId_Ontology: "ontologymanagement",
    containerId_Ontology: "NamedIndividualSearchDocument",
    containerId_Ontology_ClassSearch: "ClassSearchDocument",
    partitionKey_Ontology: { kind: "id", paths: ["/name"] }, 


};
module.exports = OntologyConfig;