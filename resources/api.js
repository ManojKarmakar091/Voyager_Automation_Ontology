var axios = require("../node_modules/axios");

var apiHelper = function () {

    this.getRequest = async function (getAPIUrl) {

        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'get',
                url: getAPIUrl,
                headers: headers,
            });
            return await response;
        } catch (error) {
            return error.response;

        }
    }



    this.postRequest = async function (getAPIUrl, datapayload) {

        try {

            const headers = {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
      method: 'post',
                url: getAPIUrl,
                data: datapayload,
                headers: headers,
            });
            return await response;

        } catch (error) {
            return error.response;
        }
    }

    this.putRequest = async(getAPIUrl, datapayload)=> {

        try {

            const headers = {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'put',
                url: getAPIUrl,
                data: datapayload,
                headers: headers,
            });
            return await response;
        } catch (error) {
            return error.response;
        }
    }


    this.patchRequest = async(getAPIUrl, datapayload)=> {
        try {
            const headers = {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'patch',
                url: getAPIUrl,
                data: datapayload,
                headers: headers,
            });
            return await response;
        } catch (error) {

            return error.response;
        }
    }

    this.deleteRequest = async function (getAPIUrl, payload) {
        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({

                method: 'delete',
                url: getAPIUrl,
                body: payload,
                headers: headers,
            });
            return await response;
        } catch (error) {
               return error.response;
        }
    }
}

module.exports = new apiHelper();