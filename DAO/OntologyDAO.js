// @ts-check


const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../configuration/OntologyConfig");
const dbContext = require("./databaseContext");
async function selectQueryById_OntologyManagementDB(record_id)
{
      const { endpoint, key, databaseId_Ontology, containerId_Ontology} = config;
      const cosmos_Client = new CosmosClient({ endpoint, key });
      const database = cosmos_Client.database(databaseId_Ontology);
      const container = database.container(containerId_Ontology);
      const { resources: items } = await container.items.query(config.selectQuery_common+"'"+record_id+"'").fetchAll();
      return items;
};

async function selectQueryById_SearchClassOntologyManagementDB(record_id)
{
      const { endpoint, key, databaseId_Ontology, containerId_Ontology_ClassSearch} = config;
      const cosmos_Client = new CosmosClient({ endpoint, key });
      const database = cosmos_Client.database(databaseId_Ontology);
      const container = database.container(containerId_Ontology_ClassSearch);
      const { resources: items } = await container.items.query(config.selectQuery_common+"'"+record_id+"'").fetchAll();
      return items;
};


module.exports = {
    selectQueryById_OntologyManagementDB,
    
    selectQueryById_SearchClassOntologyManagementDB
     

}