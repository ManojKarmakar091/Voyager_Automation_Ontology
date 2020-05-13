var api = require('../resources/api');
var logger = require("../Logger/log4jsconf");
const selectDAOModule = require('../DAO/OntologyDAO');
var animalTypeSuggestPayload_Size = require("../testdata/Ontology/AnimalTypeSuggestPayload")
var animalTypeSearchPayload = require("../testdata/Ontology/AnimalTypeSearchPayload")
var ontologyConfig = require("../configuration/OntologyConfig")

describe('Ontology Name_Individual API Testing', () => {
    var originalTimeout;

    beforeEach(function () {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


     it('157802 Enabler - Validate the AnimalType Suggest for size  10, @Regression, @Smoke', async () => {

        logger.logger().info('POST CALL to AnimalType Suggest for size10')
        var AnimalTypeSuggestPayloadData = require("../testdata/Ontology/AnimalTypeSuggestPayload")
        const animalTypeSuggestPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SuggestAnimalType_EndPoint
        AnimalTypeSuggestpayload = AnimalTypeSuggestPayloadData.AnimalTypeSuggestPayload_Size10
        browser.sleep(7000)
        let SuggestAnimalType = await api.postRequest(animalTypeSuggestPostUrl, AnimalTypeSuggestpayload);
        logger.logger().info('POST_data = ', JSON.stringify(SuggestAnimalType.data, null, 2));
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[0].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);

              //-------------------Assert  Name of 1st Name Individual and AnimalType Suggest for size  10 from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[0].name);
               expect(animalTypeSuggestPayload_Size.AnimalTypeSuggestPayload_Size10.size).toBe(SuggestAnimalType.data.data.size)    

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[1].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 2nd NameIndividual id: ${item.id} - Item with 2nd NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 2nd Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[1].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[2].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 3rd NameIndividual id: ${item.id} - Item with 3rd NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 3rd Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[2].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[3].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 4th NameIndividual id: ${item.id} - Item with 4th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 4th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[3].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[4].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 5th NameIndividual id: ${item.id} - Item with 5th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 5th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[4].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[5].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 6th NameIndividual id: ${item.id} - Item with 6th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 6th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[5].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[6].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 7th NameIndividual id: ${item.id} - Item with 7th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 7th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[6].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[7].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 8th NameIndividual id: ${item.id} - Item with 8th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 8th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[7].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[8].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 9th NameIndividual id: ${item.id} - Item with 9th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 9th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[8].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[9].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 10th NameIndividual id: ${item.id} - Item with 10th NameIndividual: ${item.name}`);
        
                //-------------------Assert  Name of 10th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[9].name);
                expect()

            })
        })
    }) 
    it('157802 Enabler - Validate the AnimalType Suggest for size 20, @Regression, @Smoke', async () => {

        logger.logger().info('POST CALL to AnimalType Suggest for size20')
        var AnimalTypeSuggestPayloadData = require("../testdata/Ontology/AnimalTypeSuggestPayload")
        const animalTypeSuggestPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SuggestAnimalType_EndPoint
        AnimalTypeSuggestpayload = AnimalTypeSuggestPayloadData.AnimalTypeSuggestPayload_Size20
        let SuggestAnimalType = await api.postRequest(animalTypeSuggestPostUrl, AnimalTypeSuggestpayload);
        logger.logger().info('POST_data = ', JSON.stringify(SuggestAnimalType.data, null, 2));
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[0].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);

              //-------------------Assert  Name of 1st Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[0].name);
                expect(animalTypeSuggestPayload_Size.AnimalTypeSuggestPayload_Size20.size).toBe(SuggestAnimalType.data.data.size) 

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[10].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 11th NameIndividual id: ${item.id} - Item with 11th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 11th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[10].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[11].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 12th NameIndividual id: ${item.id} - Item with 12th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 12th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[11].name);

            })
        })
        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[12].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 13th NameIndividual id: ${item.id} - Item with 13th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 13th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[12].name);

            })
        })

        await selectDAOModule.selectQueryById_OntologyManagementDB(SuggestAnimalType.data.data.result[19].name).then(async function (items) {

            items.forEach(item => {
                logger.logger().info(`Item with 20th NameIndividual id: ${item.id} - Item with 20th NameIndividual: ${item.name}`);

                //-------------------Assert  Name of 20th Name Individual from Ontology DB------------------------------------
                expect(item.name).toBe(SuggestAnimalType.data.data.result[19].name);

            })
        })
}) 

it('157801 Enabler - Validate the AnimalType Search  with "searchType= sratrswith" for page 1 size 10, @Regression, @Smoke', async () => {

    logger.logger().info('POST CALL to AnimalType Search  with "searchType= sratrswith" for page 1 size 10')
    var AnimalTypeSearchPayloadData = require("../testdata/Ontology/AnimalTypeSearchPayload")
    const animalTypeSearchPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SearchAnimalType_EndPoint
    AnimalTypeSearchpayload = AnimalTypeSearchPayloadData.AnimalTypeSearchPayload_page1_size10
    let SearchAnimalType = await api.postRequest(animalTypeSearchPostUrl, AnimalTypeSearchpayload);
    logger.logger().info('POST_data = ', JSON.stringify(SearchAnimalType.data, null, 2));
    await selectDAOModule.selectQueryById_OntologyManagementDB(SearchAnimalType.data.data.result[0].name).then(async function (items) {

        items.forEach(item => {
            logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);

          //-------------------Assert AnimalType Search  with "searchType= sratrswith" for page 1 size 10 from Ontology DB------------------------------------
            expect(item.name).toBe(SearchAnimalType.data.data.result[0].name);
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page1_size10.size).toBe(SearchAnimalType.data.data.size) 
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page1_size10.size).toBe(SearchAnimalType.data.data.pageElements) 
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page1_size10.page).toBe(SearchAnimalType.data.data.page)

        })
    })



})
it('157801 Enabler - Validate the AnimalType Search  with "searchType= sratrswith" for page 58 size 10, @Regression, @Smoke', async () => {

    logger.logger().info('POST CALL toAnimalType Search  with "searchType= sratrswith" for page 58 size 10')
    var AnimalTypeSearchPayloadData = require("../testdata/Ontology/AnimalTypeSearchPayload")
    const animalTypeSearchPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SearchAnimalType_EndPoint
    AnimalTypeSearchpayload = AnimalTypeSearchPayloadData.AnimalTypeSearchPayload_page58_size10
    let SearchAnimalType = await api.postRequest(animalTypeSearchPostUrl, AnimalTypeSearchpayload);
    logger.logger().info('POST_data = ', JSON.stringify(SearchAnimalType.data, null, 2));
    await selectDAOModule.selectQueryById_OntologyManagementDB(SearchAnimalType.data.data.result[0].name).then(async function (items) {

        items.forEach(item => {
            logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);

          //-------------------Assert  Name of 1st Name Individual from Ontology DB------------------------------------
            expect(item.name).toBe(SearchAnimalType.data.data.result[0].name);
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page58_size10.size).toBe(SearchAnimalType.data.data.size) 
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page58_size10.page).toBe(SearchAnimalType.data.data.page)
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page58_size10.size).toBe(SearchAnimalType.data.data.pageElements)
        })
    })



})
it('157801 Enabler - Validate the AnimalType Search  with "searchType= sratrswith" for page 59 size 10, @Regression, @Smoke', async () => {

    logger.logger().info('POST CALL to AnimalType Search  with "searchType= sratrswith" for page 59 size 10')
    var AnimalTypeSearchPayloadData = require("../testdata/Ontology/AnimalTypeSearchPayload")
    const animalTypeSearchPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SearchAnimalType_EndPoint
    AnimalTypeSearchpayload = AnimalTypeSearchPayloadData.AnimalTypeSearchPayload_page59_size10
    let SearchAnimalType = await api.postRequest(animalTypeSearchPostUrl, AnimalTypeSearchpayload);
    logger.logger().info('POST_data = ', JSON.stringify(SearchAnimalType.data, null, 2));
    await selectDAOModule.selectQueryById_OntologyManagementDB(SearchAnimalType.data.data.result[0].name).then(async function (items) {

        items.forEach(item => {
            logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);

          //-------------------Assert  Name of 1st Name Individual from Ontology DB------------------------------------
            expect(item.name).toBe(SearchAnimalType.data.data.result[0].name);
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page59_size10.size).toBe(SearchAnimalType.data.data.size) 
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page59_size10.page).toBe(SearchAnimalType.data.data.page)
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page59_size10.size).toBe(SearchAnimalType.data.data.pageElements)
        })
    })

})
it('157801 Enabler - Validate the AnimalType Search  with "searchType= conatains" for page 60 size 10 , @Regression, @Smoke', async () => {

    logger.logger().info('POST CALL to AnimalType Search  with "searchType= searchType" for page 60 size 10')
    var AnimalTypeSearchPayloadData = require("../testdata/Ontology/AnimalTypeSearchPayload")
    const animalTypeSearchPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SearchAnimalType_EndPoint
    AnimalTypeSearchpayload = AnimalTypeSearchPayloadData.AnimalTypeSearchPayload_page60_size10_conatins
    let SearchAnimalType = await api.postRequest(animalTypeSearchPostUrl, AnimalTypeSearchpayload);
    logger.logger().info('POST_data = ', JSON.stringify(SearchAnimalType.data, null, 2));
    await selectDAOModule.selectQueryById_OntologyManagementDB(SearchAnimalType.data.data.result[0].name).then(async function (items) {

        items.forEach(item => {
            logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);

          //-------------------Assert  Name of 1st Name Individual from Ontology DB------------------------------------
            expect(item.name).toBe(SearchAnimalType.data.data.result[0].name);
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page60_size10_conatins.size).toBe(SearchAnimalType.data.data.size) 
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page60_size10_conatins.page).toBe(SearchAnimalType.data.data.page)
            expect(animalTypeSearchPayload.AnimalTypeSearchPayload_page60_size10_conatins.size).toBe(SearchAnimalType.data.data.pageElements)
        })
    })

}) 

it('157801 Enabler - Validate the AnimalType "voyager_reference_key" Search  with "searchType= conatains" for page 1 size 10 , @Regression, @Smoke', async () => {

    logger.logger().info('POST CALL to AnimalType Search  with "searchType= searchType" for page 60 size 10')
    var AnimalTypeSearchPayloadData = require("../testdata/Ontology/AnimalTypeSearchPayload")
    const animalTypeSearchPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SearchAnimalType_EndPoint
    AnimalTypeSearchpayload = AnimalTypeSearchPayloadData.AnimalTypeSearchPayload_page1_size10
    let SearchAnimalType = await api.postRequest(animalTypeSearchPostUrl, AnimalTypeSearchpayload);
    logger.logger().info('POST_data = ', JSON.stringify(SearchAnimalType.data, null, 2));
    await selectDAOModule.selectQueryById_OntologyManagementDB(SearchAnimalType.data.data.result[0].name).then(async function (items) {

        items.forEach(item => {
            logger.logger().info(`Item with 1st NameIndividual id: ${item.id} - Item with 1st NameIndividual: ${item.name}`);

          //-------------------Assert  AnimalType of 1st Name Individual from Ontology DB------------------------------------
            expect(item.name).toBe(SearchAnimalType.data.data.result[0].name);
            expect(item.class[4].properties.voyager_reference_key[0].id).toBe(SearchAnimalType.data.data.result[0].ancestors[0].properties.voyager_reference_key[0].id);
        })
    })

})




it('158531 Enabler - Validate the Suggest and Retrieve class API  with "searchType= exact" ,"queryText": "Sphaeroderus" for size 10 , @Regression, @Smoke', async () => {

    logger.logger().info('POST CALL to Suggest and Retrieve class API  with "searchType= exact","queryText": "Sphaeroderus" for size 10')
    var ClassSuggestPayloadData = require("../testdata/Ontology/Class_Suggest")
    const classSuggestPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.ClassSuggest_EndPoint
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
    var ClassSuggestPayloadData = require("../testdata/Ontology/Class_Suggest")
    const classSuggestPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.ClassSuggest_EndPoint
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
    var ClassSuggestPayloadData = require("../testdata/Ontology/Class_Suggest")
    const classSuggestPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.ClassSuggest_EndPoint
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
})
