const Post = () => {
    return ( 

        <div className="post">
        <div className="image">
          <img src="https://media.istockphoto.com/id/1193323373/vector/a-colorful-trendy-card-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=iIqY56kV1nKpfKCceag5NFWBnogRv8ZmJCFiicZxlpU="></img>
        </div>
      
        <div className="texts">
          <h2>Lorem Ipsum is simply dummy text of the printing </h2>
          <p className="info"> 
           <a className="author">Mostafa Azz</a> 
           <time>2023-7-14</time>
          </p>
          <p className="summary">
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          
          </p>
        </div>
      </div>
     );
}
 
export default Post;