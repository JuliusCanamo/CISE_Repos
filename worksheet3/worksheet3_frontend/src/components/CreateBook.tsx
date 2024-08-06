 import React, { ChangeEvent, FormEvent, useState } from "react";
 import { useRouter  } from "next/navigation";
 import Line from "next/link";
 import { Book, DefaultEmptyBook } from "./Book";
import { error } from "console";

 const CreateBookComponent = () => {
    const navigate = useRouter();

    const [book, setBook] = useState<Book>(DefaultEmptyBook);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBook({ ...book, [event.target.name]: event.target.value});
    };

    const onSumbit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(book);
        fetch("http://localhost:8082/api/books", {method: 'POST', headers: {"Content-type": "application/json"}, body: JSON.stringify(book)})
        .then((res) => {
            console.log(res);
            setBook(DefaultEmptyBook);
            navigate.push("/");
        })
        .catch((err) => {
            console.log('Error from CreateBook' + err);
        });
    };

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link href="/" className="btn btn-outline-warning float-left">
                        Show Book List
                        </Link>
                    </div>
                    <div className="col-md 10 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new Book</p>
                        <form noValidate onSubmit={onSumbit}>
                            <div className="form-group">
                                <input 
                                  type="text"
                                  placeholder="Title of the Book"
                                  name="Title"
                                  className="form-control"
                                  value={book.title}
                                  onChange={onChange}
                                  />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                   type="text"
                                   placeholder="ISBN"
                                   name="isbn"
                                   className="form-control"
                                   value={book.isbn}
                                   onChange={onChange}
                                   />
                            </div>
                            <br />
                            <div className="form-group">
                                <input 
                                   type="text"
                                   placeholder="Author"
                                   name="author"
                                   className="form-control"
                                   value={book.author}
                                   onChange={onChange}
                                   />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Publisher of this book"
                                  name="publisher"
                                  className="form-control"
                                  value={book.publisher}
                                  onChange={onChange}
                                  />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
                              >
                                Submit
                              </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
 };

 export default CreateBookComponent;