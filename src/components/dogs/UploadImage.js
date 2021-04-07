import React, { Component, useState} from 'react';
import {render} from 'react-dom'
import {storage,firestore} from '../../config/fbConfig'
import firebase from '../../config/fbConfig';

import { useEffect, useRef } from "react";

// currently using this 
class UploadImage extends Component {
    constructor() {
        super();
        this.state = {image:[],url:''};
        this.handleUpload = this.handleUpload.bind(this); 
        this.handleChangeUrl = this.handleChangeUrl.bind(this); 
        this.handleChangeImage = this.handleChangeImage.bind(this); 
    };

    handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (e.target.files[0]){
          this.setState({
            image: e.target.files[0]
          })
      }
    }

    handleChangeUrl = (e) => {
          this.props.methodfromparent(this.state.url);
    }

    handleUpload = () => {
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(this.state.image.name)
              .getDownloadURL()
              .then(url => {
                this.setState({
                    url: url
                  });
                console.log(url)
              })
          }
        );
      };

    render() {
        return (
            <div>
            <div className="input-field">
                <label htmlFor="img">Image</label>
                <br></br>
                <br></br>
                <input type="file" id="image" onChange={this.handleChangeImage} />
                <button className="btn blue lighthen-1 z-depth-0" onClick={() => { this.handleUpload(); this.handleChangeUrl();}}>Create</button>
            </div>
        </div>
        );
      }
}
export default UploadImage
