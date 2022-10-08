import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import { validationBook, validatePartialBook } from '../middlewares/book.middleware';

const router = Router();
const booksController = new BooksController();
const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);
router.patch(booksSlashId, validatePartialBook, booksController.partialUpdate);

export default router;
