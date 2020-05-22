
var ReportportalAgent = require('agent-js-jasmine');

var envs = {  }

process.argv.slice(2).forEach(arg=>{
    var [key,value] = arg.split("=")
    envs[key] = value || true
})
var testType = envs["--grep"] || "SuperSet";

const agent = new ReportportalAgent({
  // client settings
  token: "c7331821-6178-48d5-b72c-0bc3b222e8d0",
  endpoint: "http://reportportal.westcentralus.cloudapp.azure.com:8080/api/v1",
  launch: "Voyager_Ontology_"+ testType +"_"+envs["--NODE_ENV"],
  project: "voyager_automation",
  // agent settings
  attachPicturesToLogs: true,
});


module.exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  specs: [
    'testsuites/Ontology_AnimalTypeSuggest&Search.js',
    'testsuites/Ontology_NameIndivdualsSuggest&Search.js',
   'testsuites/Ontology_ClassSuggest&Search.js'
],

  capabilities: { 'browserName': 'chrome',
    chromeOptions: { args: ["--headless"] }},
  
  onPrepare: function () {
    jasmine.getEnv().addReporter(agent.getJasmineReporter());
  },
  afterLaunch: function(){
    return agent.getExitPromise().then(() => {
      console.log('finish work');
    })
  }
};