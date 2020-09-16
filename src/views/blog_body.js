import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


class Body extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://whispering-harbor-63271.herokuapp.com/blogs')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data
                })
            })

    }
    render() {
        const { posts } = this.state;
        const post = posts.map(post => {
            return (
                <div className="container" key={post._id}>
                    <div className="col s12 m12">
                        <Link to={"/" + post._id}>
                            <div className="card z-depth-0 black-text">
                                <div className="card-stacked">
                                    <div className="card-content waves-effect waves-block waves-dark">
                                        <span className="card-title change"><h5>{post.title}</h5></span>
                                        <p className="change">{post.snippet}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                {post}
            </div>
        );
    }
}

export default Body;