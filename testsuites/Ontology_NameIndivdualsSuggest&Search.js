var api = require('../resources/api');
var logger = require("../Logger/log4jsconf");

var nameIndividualsPayloadData = require("../testdata/Ontology/nameIndividualsPayload")
var suggestNameIndividualsPayloadData = require("../testdata/Ontology/nameIndividualSuggestpayload")

var ontologyConfig = require("../configuration/OntologyConfig")

describe('Ontology Name_Individual API Testing', () => {

    beforeAll(() => {
    });
    //==================================================================================================================================================
    
    it('156096 Enabler - Validate the Search Individual API Response through postman for Page2_size30, @Regression, @Smoke', async () => {
        logger.logger().info('POST CALL to Search Name Individuals for Page2_size30')
        var searchNameIndividualPayloadData = require("../testdata/Ontology/nameIndividualsPayload")
        const nameIndividualPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SearchNameIndividual_EndPoint
        NameIndividualpayload = searchNameIndividualPayloadData.SearchNameIndividualPayload_page2_size30
        browser.sleep(7000)
        let SearchNameIndividual = await api.postRequest(nameIndividualPostUrl, NameIndividualpayload);
        browser.sleep(7000)
        logger.logger().info('POST_data = ', JSON.stringify(SearchNameIndividual.data, null, 2));
        logger.logger().info('Number of Total_Pages= ', SearchNameIndividual.data.data.totalPages)
        logger.logger().info('Number of Total_Elements= ', SearchNameIndividual.data.data.totalElements)
        logger.logger().info('Number of Size= ', SearchNameIndividual.data.data.size)
        logger.logger().info('Number of Pages= ', SearchNameIndividual.data.data.page)
        logger.logger().info('Number of Page_Elements= ', SearchNameIndividual.data.data.pageElements)
        expect(nameIndividualsPayloadData.SearchNameIndividualPayload_page2_size30.page).toBe(SearchNameIndividual.data.data.page);
        expect(nameIndividualsPayloadData.SearchNameIndividualPayload_page2_size30.size).toBe(SearchNameIndividual.data.data.size);

    })

    it('156096 Enabler - Validate the Search Individual API Response through postman for Page1_size31, @Regression, @Smoke', async () => {
        logger.logger().info('API:POST CALL to Search Name Individuals for Page1_size31')
        var searchNameIndividualPayloadData = require("../testdata/Ontology/nameIndividualsPayload")
        const nameIndividualPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SearchNameIndividual_EndPoint
        NameIndividualpayload = searchNameIndividualPayloadData.SearchNameIndividualPayload_page1_size31
        browser.sleep(7000)
        let SearchNameIndividual = await api.postRequest(nameIndividualPostUrl, NameIndividualpayload);
        browser.sleep(7000)
        logger.logger().info('POST_data = ', JSON.stringify(SearchNameIndividual.data, null, 2));
        logger.logger().info('Number of Total_Pages= ', SearchNameIndividual.data.data.totalPages)
        logger.logger().info('Number of Total_Elements= ', SearchNameIndividual.data.data.totalElements)
        logger.logger().info('Number of Size= ', SearchNameIndividual.data.data.size)
        logger.logger().info('Number of Pages= ', SearchNameIndividual.data.data.page)
        logger.logger().info('Number of Page_Elements= ', SearchNameIndividual.data.data.pageElements)
        expect(nameIndividualsPayloadData.SearchNameIndividualPayload_page1_size31.page).toBe(SearchNameIndividual.data.data.page);
        expect(nameIndividualsPayloadData.SearchNameIndividualPayload_page1_size31.size).toBe(SearchNameIndividual.data.data.size);




    })


    it('156097 Enabler - Validate the suggest API response through postman for Size 50, @Regression, @Smoke', async () => {
        logger.logger().info('API:POST CALL to Suggest Search Name Individuals for Size 50')
        var SuggestsearchNameIndividualPayloadData = require("../testdata/Ontology/nameIndividualSuggestpayload")
        const SuggestnameIndividualPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SuggestIndividualSearch_EndPoint
        SuggestNameIndividualpayload = SuggestsearchNameIndividualPayloadData.SuggestPayload_size50
        
        let SuggestSearchNameIndividual = await api.postRequest(SuggestnameIndividualPostUrl, SuggestNameIndividualpayload);
      
        logger.logger().info('POST_data = ', JSON.stringify(SuggestSearchNameIndividual.data, null, 2));
        logger.logger().info('Number of Total_Size= ', SuggestSearchNameIndividual.data.data.size)

        expect(suggestNameIndividualsPayloadData.SuggestPayload_size50.size).toBe(SuggestSearchNameIndividual.data.data.size);
        




    })
    it('156097 Enabler - Validate the suggest API response through postman for Size 10, @Regression, @Smoke', async () => {
        logger.logger().info('API:POST CALL to Suggest Search Name Individuals for Size 10')
        var SuggestsearchNameIndividualPayloadData = require("../testdata/Ontology/nameIndividualSuggestpayload")
        const SuggestnameIndividualPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SuggestIndividualSearch_EndPoint
        SuggestNameIndividualpayload = SuggestsearchNameIndividualPayloadData.SuggestPayload_size10
        let SuggestSearchNameIndividual = await api.postRequest(SuggestnameIndividualPostUrl, SuggestNameIndividualpayload);
        logger.logger().info('POST_data = ', JSON.stringify(SuggestSearchNameIndividual.data, null, 2));
        logger.logger().info('Number of Total_Size= ', SuggestSearchNameIndividual.data.data.size)
        expect(suggestNameIndividualsPayloadData.SuggestPayload_size10.size).toBe(SuggestSearchNameIndividual.data.data.size);
        




    })

    it('156097 Enabler - Validate the suggest API response through postman for Size 20, @Regression, @Smoke', async () => {
        logger.logger().info('API:POST CALL to Suggest Search Name Individuals for Size 20')
        var SuggestsearchNameIndividualPayloadData = require("../testdata/Ontology/nameIndividualSuggestpayload")
        const SuggestnameIndividualPostUrl = ontologyConfig.hostname_Ontology + ontologyConfig.SuggestIndividualSearch_EndPoint
        SuggestNameIndividualpayload = SuggestsearchNameIndividualPayloadData.SuggestPayload_size20
        let SuggestSearchNameIndividual = await api.postRequest(SuggestnameIndividualPostUrl, SuggestNameIndividualpayload);
        logger.logger().info('POST_data = ', JSON.stringify(SuggestSearchNameIndividual.data, null, 2));
        logger.logger().info('Number of Total_Size= ', SuggestSearchNameIndividual.data.data.size)
        expect(suggestNameIndividualsPayloadData.SuggestPayload_size20.size).toBe(SuggestSearchNameIndividual.data.data.size);
       




    })
})