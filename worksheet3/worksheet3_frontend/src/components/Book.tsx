export type Book = {
    _id?: string;
    title?: string;
    isbn?: string;
    author?: string;
    description?: string;
    publisher_date?: string;
    publisher?: string;
    update_date?: string;
};

export const DefaultEmptyBook: Book = {
    _id: undefined,
    title: '',
    isbn: '',
    author: '',
    description: '',
    publisher_date: undefined,
    publisher: '',
    update_date: undefined,
};