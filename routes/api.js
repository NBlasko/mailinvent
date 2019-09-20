const router = require('express-promise-router')();
const ApiController = require('../controllers/api');
const {
  validateBody,
  schemas } = require('../helpers/routeHelpers')



router.route('/')
  .get(
    ApiController.index
  )
  .post(
  
    validateBody(schemas.postSchema),
    ApiController.newMail
  );


 

module.exports = router;