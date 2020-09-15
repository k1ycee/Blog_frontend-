import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.id
        axios.get("https://whispering-harbor-63271.herokuapp.com/blogs/" + id)
            .then((res) => {
                console.log(res)
                this.setState({
                    post: res.data
                })
            }).catch((err) => console.log(err))

    }
    render() {
        const post = this.state.post ? (
            <div className="post">
            <br />
                <h5 className="text-bold change grey-text text-darken-1">{this.state.post.title}</h5>
                <br />
                <p><img src={this.state.post.img} alt={this.state.post.img} width="720" height="600" /></p>
                <br />
                <p className="change grey-text text-darken-1">{this.state.post.body}</p>
            </div>
        ) : (
                <div className="center">
                    Loading.....
                </div>
            )
        return (
            <div className="container">
                { post }
            </div>
        )
    }
}


export default Post