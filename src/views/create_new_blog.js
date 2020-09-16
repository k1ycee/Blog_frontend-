import React, { Component } from 'react'
import axios from 'axios'


class CreateBlog extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea change" maxLength="100"></textarea>
                                <label for="textarea1">Title</label>
                            </div>
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea change"></textarea>
                                <label for="textarea1">Body</label>
                            </div>
                        </div>
                        <div className="file-field input-field">
                            <div className="btn-white">
                                <span><i className="material-icons">camera_alt</i></span>
                                <input type="file"/>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}


export default CreateBlog