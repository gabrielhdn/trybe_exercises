import connection from './connection';
import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
}

export default class BookModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  // COM TYPE ASSERTIONS:
  // public async getAll(): Promise<Book[]> {
  //   const result = await this.connection.execute('SELECT * FROM books');
  //   const [rows] = result; // é preciso desestruturar o array para poder atribuir o tipo
  //   return rows as Book[];
  // }

  // COM GENERICS:
  public async getAll(): Promise<Book[]> {
    const [rows] = await this.connection.execute<(Book & RowDataPacket)[]>('SELECT * FROM books');
    return rows; // o tipo de 'rows' já foi definido na chamada do execute
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
    );

    return { id: insertId, ...book };
  }
}