if (Meteor.isClient) {
  eCustomer="";
  eClient="";
  eWebmaster="";
  eProcessor="";
  eEmailCustomer="";
  eEmailClient="";
  eWebMasterEmail="";
  eEmailProcessor="";
  eprinterProcessor="";
  eorderProcessor="";
  
          
          
  Template.clientInput.events({
  'click .enableSms' :	function(event){
  esms = document.getElementsByClassName("enableSms")[0].value;
  },
  'click .disableSms' :	function(event){
  esms = document.getElementsByClassName("disableSms")[0].value;
  },
  'click .enableCustomersms' :	function(event){
  eCustomer = document.getElementsByClassName("enableCustomersms")[0].value;
  },
  'click .disableCustomerSms' :	function(event){
  eCustomer = document.getElementsByClassName("disableCustomerSms")[0].value;
  },
  'click .enableClientsms' :	function(event){
  eClient = document.getElementsByClassName("enableClientsms")[0].value;
  },
  'click .disableClientsms' :	function(event){
  eClient = document.getElementsByClassName("disableClientsms")[0].value;
  },
  'click .enableWebMastersms' :	function(event){
  eWebmaster = document.getElementsByClassName("enableWebMastersms")[0].value;
  },
  'click .disableWebMastersms' : function(event){
  eWebmaster = document.getElementsByClassName("disableWebMastersms")[0].value;
  },
  'click .sendGridProcessorsms' : function(event){
  eProcessor = document.getElementsByClassName("sendGridProcessorsms")[0].value;
  },
  'click .twilioProcessorsms' :	function(event){
  eProcessor = document.getElementsByClassName("twilioProcessorsms")[0].value;
  },
  'click .enableEmail' :	function(event){
  eEmail = document.getElementsByClassName("enableEmail")[0].value;
  },
  'click .disableEmail' :	function(event){
  eEmail = document.getElementsByClassName("disableEmail")[0].value;
  },
  'click .enableEmailCustomer' :	function(event){
  eEmailCustomer = document.getElementsByClassName("enableEmailCustomer")[0].value;
  },
  'click .disableEmailCustomer' :	function(event){
  eEmailCustomer = document.getElementsByClassName("disableEmailCustomer")[0].value;
  },
  'click .enableEmailClient' :	function(event){
  eEmailClient = document.getElementsByClassName("enableEmailClient")[0].value;
  },
  'click .disableEmailClient' :	function(event){
  eEmailClient = document.getElementsByClassName("disableEmailClient")[0].value;
  },
  'click .enableWebMasteremail' :	function(event){
  eWebMasterEmail = document.getElementsByClassName("enableWebMasteremail")[0].value;
  },
  'click .disableWebMasteremail' :	function(event){
  eWebMasterEmail = document.getElementsByClassName("disableWebMasteremail")[0].value;
  },
  'click .mailgunProcessoremail' : function(event){
  eEmailProcessor = document.getElementsByClassName("mailgunProcessoremail")[0].value;
  },
  'click .otherProcessoremail' :	function(event){
  eEmailProcessor = document.getElementsByClassName("otherProcessoremail")[0].value;
  },
   'click .enablePrinter' :	function(event){
  ePrinter = document.getElementsByClassName("enablePrinter")[0].value;
  },
  'click .disablePrinter' :	function(event){
  ePrinter = document.getElementsByClassName("disablePrinter")[0].value;
  },
  'click .printerProcessor' : function(event){
  eprinterProcessor = document.getElementsByClassName("printerProcessor")[0].value;
  },
  'click .noPrinterProcessor' :	function(event){
  eprinterProcessor = document.getElementsByClassName("noPrinterProcessor")[0].value;
  },
  'click .enableOrderSystem' :	function(event){
  eOrderSystem = document.getElementsByClassName("enableOrderSystem")[0].value;
  },
  'click .DisableOrderSystem' :	function(event){
  eOrderSystem = document.getElementsByClassName("disablePrinter")[0].value;
  },
  'click .orderProcessor' : function(event){
  eorderProcessor = document.getElementsByClassName("orderProcessor")[0].value;
  },
  'click .noOrderProcessor' :	function(event){
  eorderProcessor = document.getElementsByClassName("noOrderProcessor")[0].value;
  },
  
  'submit form' : function(event){
  event.preventDefault();
  var webmasterPhone = event.target.smsWebMasterPhone.value;
  var accsid = event.target.AccSID.value;
  var token = event.target.AuthToken.value;
  var phno = event.target.PhoneNumber.value;
  var APIKey = event.target.APIKey.value;
  var DomainName = event.target.DomainName.value;
  var FromEmailAdd = event.target.FromEmail.value;
  var ClientEmailAdd = event.target.ClientEmail.value;
  var WebMasterAdd = event.target.WebMasterEmail.value;
  var WebsheetsUrL= event.target.WebsheetsURL.value;
  var valueToInsert = {
  sms: esms,
  smsCustomer: eCustomer,
  smsClient: eClient,
  smsWebMaster: eWebmaster,
  smsProcessor: eProcessor,
  smsWebmasterPhoneNumber: webmasterPhone,
  email: eEmail,
  emailCustomer: eEmailCustomer,
  emailClient: eEmailClient,  
  emailWebmaster: eWebMasterEmail,
  emailProcessor: eEmailProcessor,
  emailFromAddress: FromEmailAdd,
  emailClientAddress: ClientEmailAdd,
  emailWebmasterAddress: WebMasterAdd, 
  printer: ePrinter,
  printerProcessor: eprinterProcessor,
  orderSystem: eOrderSystem,
  orderProcessor: eorderProcessor,
  websheetsUrl: WebsheetsUrL
   }
   if (eProcessor != ""){
  valueToInsert[eProcessor] = {
    accountSID: accsid,
    authToken: token,
    phoneNumber: phno}}
  if (eEmailProcessor != ""){
  valueToInsert[eEmailProcessor] = {
    apiKey: APIKey,
    domainName: DomainName} }
  ChoiceList.update({_id:"5"},valueToInsert,{upsert:true});
  }
  }); 
    }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
