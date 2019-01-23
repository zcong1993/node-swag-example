const { BookStore } = require('../store')

const books = new BookStore()

/**
 * @summary Get book by id
 * @description Get book by id
 * @tags books
 * @accept application/json
 * @produce application/json
 * @param id path string true "book id"
 * @success 200 {object} def.Book "ok"
 * @failure 404 "not found"
 * @router /books/{id} get
 */
const getBook = ctx => {
  const book = books.get(ctx.params.id)
  if (book) {
    ctx.body = book
    return
  }

  ctx.status = 404
}

/**
 * @summary Get all books
 * @description Get all books
 * @tags books
 * @accept application/json
 * @produce application/json
 * @success 200 [object] def.Book "ok"
 * @router /books get
 */
const getBooks = ctx => {
  ctx.body = books.all()
}

/**
 * @summary Create new book
 * @description Create new book
 * @tags books
 * @accept application/json
 * @produce application/json
 * @param book body def.BookInput true "new book"
 * @success 201 "create success"
 * @router /books post
 */
const createBook = ctx => {
  books.add(ctx.request.body)
  ctx.status = 201
}

/**
 * @summary Get all books
 * @description Get all books
 * @tags books
 * @accept application/json
 * @produce application/json
 * @param id path string true "book id"
 * @success 204 "delete success"
 * @router /books/{id} delete
 */
const deleteBook = ctx => {
  books.delete(ctx.params.id)
  ctx.status = 204
}

/**
 * @summary Update new book
 * @description Update new book
 * @tags books
 * @accept application/json
 * @produce application/json
 * @param id path string true "book id"
 * @param book body def.BookInput true "new book infomation"
 * @success 204 "update success"
 * @router /books/{id} put
 */
const updateBook = ctx => {
  books.update(ctx.params.id, ctx.request.body)
  ctx.status = 204
}

module.exports = {
  getBook,
  getBooks,
  createBook,
  deleteBook,
  updateBook,
}
