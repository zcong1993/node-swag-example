const compose = require('koa-compose')
const Router = require('koa-router')
const {
  getBook,
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} = require('../controllers/api')

const router = new Router()

router.get('/', ctx => {
  ctx.body = 'hello world'
})

router.get('/books', getBooks)
router.get('/books/:id', getBook)
router.post('/books', createBook)
router.put('/books', updateBook)
router.delete('/books/:id', deleteBook)

module.exports = () => compose([router.routes(), router.allowedMethods()])
