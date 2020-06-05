import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

class New extends Component {
    fileArray = []
    fileObj = []

    constructor(props) {
        super(props)
        this.state = {
            image: [],
            author: '',
            place: '',
            description: '',
            hashtags: ''
        }
        this.handleImageChange = this.handleImageChange.bind(this)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
            for (var i=0; i < this.fileObj[0].length; i++){
        data.append('image', this.state.image[i]);
        }
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data);

        this.props.history.push('/');
    }

    handleImageChange(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ image: this.fileObj[0] })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { image } = this.state
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="text" name="author" placeholder="Nome do PET" onChange={this.handleChange} value={this.state.author} />
                <input type="text" name="hashtags" placeholder="Nome do adotante" onChange={this.handleChange} value={this.state.hashtags} />
                <input type="text" name="place" placeholder="Telefone (  ) xxxxx - xxxx" onChange={this.handleChange} value={this.state.place} />
                <textarea type="textarea" name="description" placeholder="Descrição do post" onChange={this.handleChange} value={this.state.description} /><br/>
                <div className="img">
                {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                </div>
                {console.log(image)}
                <input type="file" multiple onChange={this.handleImageChange} />
                <button type="submit">Enviar</button>
            </form>
        );
    }

}

export default New;