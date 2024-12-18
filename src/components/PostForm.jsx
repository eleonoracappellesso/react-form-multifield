import { useState } from "react";
// stato iniziale del post
const initialPost = {
    title: "",
    published: false,
    id: null,
    image: "https://via.placeholder.com/150"
};

function PostForm({ addPost }) {
    const [post, setPost] = useState(initialPost);
    // const [postList, setPostList] = useState([]);

    //
    function handleSubmit(event) {
        event.preventDefault();
        // controllo se il campo è vuoto
        if (post.title.trim() === "") return;
        // creo il nuovo post
        const newPost = { ...post, id: Date.now() };
        // richiamo la funzione del contenitore padre e reimposto il form al valore iniziale
        addPost(newPost);
        setPost(initialPost);
    }

    function handleInput(event) {
        const value =
            event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setPost({ ...post, [event.target.name]: value });
    }

    return (
        <section>
            <h4 className="text-uppercase">Inserisci un nuovo post:</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Title" className="form-label">
                        Titolo del post
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={post.title}
                        name="title"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="published"
                        checked={post.published}
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="publishedPost">
                        Post pubblico
                    </label>
                </div>
                <button type="submit" className="btn btn-success my-3">
                    Crea post
                </button>
            </form>
        </section>
    )
}

export default PostForm;