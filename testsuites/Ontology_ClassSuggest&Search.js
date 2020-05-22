var api = require('../resources/api');
var logger = require("../Logger/log4jsconf");
const selectDAOModule = require('../DAO/OntologyDAO');
var ontologyConfig = require("../configuration/OntologyConfig")
var ClassSuggestPayloadData = require("../testdata/Ontology/Class_Suggest")
describe('Ontology Name_Individual API Testing', () => {
    var originalTimeout;

    beforeEach(function () {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

      it('158531 Enabler - Validate the Suggest and Retrieve class API  with "searchType= exact" ,"queryText": "Sphaeroderus" for size 10 , @Regression, @Smoke', async () => {
 
         logger.logger().info('POST CALL to Suggest and Retrieve class API  with "searchType= exact","queryText": "Sphaeroderus" for size 10')
         
         const classSuggestPostUrl = ontologyConfig.hostname + ontologyConfig.ClassSuggest_EndPoint
         ClassSuggestpayload = ClassSuggestPayloadData.ClassSuggestPayload_Size10
         let classSuggest = await api.postRequest(classSuggestPostUrl, ClassSuggestpayload);
         logger.logger().info('POST_data = ', JSON.stringify(classSuggest.data, null, 2));
         await selectDAOModule.selectQueryById_SearchClassOntologyManagementDB(classSuggest.data.data.result[0].name).then(async function (items) {
     
             items.forEach(item => {
                 logger.logger().info(`Item with 1st ClassName id: ${item.id} - Item with 1st ClassName: ${item.name}`);
                 logger.logger().info(`Item with 1st ClassName descendants id: ${item.descendants[0].id} - Item with 1st ClassName descendants Name: ${item.descendants[0].name}`);
                 logger.logger().info(`Item with 2nd ClassName descendants id: ${item.descendants[1].id} - Item with 2nd ClassName descendants Name: ${item.descendants[1].name}`);
               //-------------------Assert Suggest Class of descendants from Ontology DB------------------------------------
                  expect(item.descendants[0].name).toBe(classSuggest.data.data.result[0].descendants[0].name);
                  expect(item.descendants[1].name).toBe(classSuggest.data.data.result[0].descendants[1].name);
                
              })
         })
     
     })
     
     
     it('158531 Enabler - Validate the Suggest and Retrieve class API  with "searchType= exact","queryText": "Struthio" for size 10 , @Regression, @Smoke', async () => {
     
         logger.logger().info('POST CALL to Suggest and Retrieve class API  with "searchType= exact" ,"queryText": "Struthio" for size 10')
      
         const classSuggestPostUrl = ontologyConfig.hostname + ontologyConfig.ClassSuggest_EndPoint
         ClassSuggestpayload = ClassSuggestPayloadData.ClassSuggestPayload_Size10_Struthio
         let classSuggest = await api.postRequest(classSuggestPostUrl, ClassSuggestpayload);
         logger.logger().info('POST_data = ', JSON.stringify(classSuggest.data, null, 2));
         await selectDAOModule.selectQueryById_SearchClassOntologyManagementDB(classSuggest.data.data.result[0].name).then(async function (items) {
     
             items.forEach(item => {
                 logger.logger().info(`Item with 1st ClassName id: ${item.id} - Item with 1st ClassName: ${item.name}`);
                 logger.logger().info(`Item with 1st ClassName descendants id: ${item.descendants[0].id} - Item with 1st ClassNamecdescendants Name : ${item.descendants[0].name}`);
                
               //-------------------Assert Suggest Class of descendants "queryText": "Struthio" from Ontology DB------------------------------------
                  expect(item.descendants[0].name).toBe(classSuggest.data.data.result[0].descendants[0].name);
                
           
              })
         })
     
     })
     
     
     it('158531 Enabler - Validate the Suggest and Retrieve class API  with "searchType= exact","queryText": "Strut" for size 100 , @Regression, @Smoke', async () => {
     
         logger.logger().info('POST CALL to Suggest and Retrieve class API  with "searchType= exact" ,"queryText": "Strut" for size 10')
         
         const classSuggestPostUrl = ontologyConfig.hostname + ontologyConfig.ClassSuggest_EndPoint
         ClassSuggestpayload = ClassSuggestPayloadData.ClassSuggestPayload_Size100_Strut
         let classSuggest = await api.postRequest(classSuggestPostUrl, ClassSuggestpayload);
         logger.logger().info('POST_data = ', JSON.stringify(classSuggest.data, null, 2));
         await selectDAOModule.selectQueryById_SearchClassOntologyManagementDB(classSuggest.data.data.result[0].name).then(async function (items) {
     
             items.forEach(item => {
                 logger.logger().info(`Item with 1st ClassName  id: ${item.id} - Item with 1st ClassName  Name: ${item.name}`);
                 logger.logger().info(`Item with 1st ClassName descendantsid: ${item.descendants[0].id} - Item with 2nd  ClassName descendants Name: ${item.descendants[0].name}`);
                
               //-------------------Assert Suggest Class of descendants "queryText": "Struthio" from Ontology DB------------------------------------
                  expect(item.descendants[0].name).toBe(classSuggest.data.data.result[0].descendants[0].name);
                
           
              })
         })
     
     })  

    it('158530 Enabler - Validate the Suggest and Retrieve class API  with "searchType= exact","queryText": "Mus" for page 1 size 10, @Regression, @Smoke', async () => {

        logger.logger().info('POST CALL to Class Search  with "searchType= exact" ,"queryText": "Mus"for page 1 size 10')
        var ClassSearchPayloadData = require("../testdata/Ontology/Class_Search")
        const classSearchPostUrl = ontologyConfig.hostname + ontologyConfig.ClassSearch_EndPoint
        ClassSearchpayload = ClassSearchPayloadData.ClassSearchPayload_Page1_Size10
        let ClassSearch = await api.postRequest(classSearchPostUrl, ClassSearchpayload);
        logger.logger().info('POST_data = ', JSON.stringify(ClassSearch.data, null, 2));

        await selectDAOModule.selectQueryById_SearchClassOntologyManagementDB(ClassSearch.data.data.result[0].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);
                //-------------------Assert Search Class of Name "queryText": "Strut" from Ontology DB------------------------------------

                expect(item.name).toBe(ClassSearch.data.data.result[0].name);

                //-------------------Assert Search Class of descendants "queryText": "Strut" from Ontology DB------------------------------------
                expect(item.descendants[0].name).toBe(ClassSearch.data.data.result[0].descendants[0].name);

                //-------------------Assert Search Class of AnimalType "queryText": "Mus" from Ontology DB------------------------------------
                expect(item.properties.animal_type_classification_comment[0].id).toBe(ClassSearch.data.data.result[0].properties.animal_type_classification_comment[0].id);
            })
        })

    })
}) 