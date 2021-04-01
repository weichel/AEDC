var Socrata = require('node-socrata');
 
var config = {
  // find a hostDomain from the listSource method
  hostDomain: 'https://controllerdata.lacity.org',
  // An accessible API table from the host domain
  resource: 'revenue',
  // Create account and register app https://opendata.socrata.com
  XAppToken: process.env.SOCRATA_APP_TOKEN || 'registered-app-token'
};
 
var soda = new Socrata(config);

 var params = {
  $select: ['fund_name', 'fiscal_year'],
  $limit: 10
}
 
soda.get(params, function(err, response, data) {
  console.log(data)
});
