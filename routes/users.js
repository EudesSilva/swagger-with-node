var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /api/users/all:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: Invalid Parameter
 *       404:
 *         description: Users not found
 */
router.get('/api/users/all', function(req, res, next) {
  res.send('respond with All users!');
});

module.exports = router;
