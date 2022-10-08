import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }

  public async getById(id: number): Promise<Book> {
    const [rows] = await this.connection.execute('SELECT * FROM books WHERE id=?', [id]);
    const [book] = rows as Book[];
    return book;
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, asbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    return { id: insertId, ...book };
  }

  public async update(id: number, book: Book) {
    const { title, price, author, isbn } = book;
    await this.connection.execute(
      'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?',
      [title, price, author, isbn, id]
    );
  }

  public async remove(id: number) {
    await this.connection.execute('DELETE FROM books WHERE id=?', [id]);
  }
}