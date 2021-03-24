import Post from '../Post/Post';
import './Main.css';

const Main = ({
    posts
}) => {
    console.log(posts);

    return (
        <main className="main-container">
            <h1>Sooooooome Heading</h1>

            <div className="posts">
                {posts.map(post =>
                    <Post 
                        key={post.id}
                        content={post.content}
                        author={post.author}                        
                    />
                )}
            </div>

        </main>
    );
}

export default Main;