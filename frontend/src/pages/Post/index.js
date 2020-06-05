import React, { Component } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';



import './style.css';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

class Post extends Component {


        state = {
            post: []
        };

    async componentDidMount() {
        this.registerToSocket();
        const { id } = this.props.match.params

        const response = await api.get(`posts/${id}`);
        this.setState({ post: response.data });
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        socket.on('like', likedPost => {
            this.setState({
                post: this.state.post.map(post => post._id === likedPost._id ? likedPost : post)
            });
        });
    }

    handleLike = (id) => {
        api.post(`posts/${id}/like`);
    }

    render() {
        const { post } = this.state
        const settings =  {
            arrows: false,
            arrowsBlock: false,
            dots: true
          };
        return (
            
                <section id="post-list">  
                    <article key={post._id}> 
                        <header>
                            <div className="user-info">
                                <strong>{post.author}</strong>
                            </div>

                            <img src={more} alt="Mais" />
                        </header>
                            
                                {(post.image || []).map(name => (
                                    <img src={`http://localhost:3333/files/${name}`} alt="..." />                                    
                                ))}
                            
                        <div className="footer">
                            <div className="actions">
                                {/*<button type="button" onClick={() => this.handleLike(post._id)}>
                                    <img src={like} alt="" />
                                </button>
                                <img src={comment} alt="" />
                                <img src={send} alt="" />*/}
                            </div>
                            {/*<strong>{post.likes} curtidas</strong><br/>*/}
                            
                            <strong>Adotante: </strong>{post.hashtags}<br/>
                            <strong>Tel:  </strong>{post.place}<br/><br/>
                            <strong>{post.author}</strong>   {post.description}
                                
                        </div>
                    </article>
                </section>
                

        );
    }

}

export default Post;