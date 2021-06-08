import React, { Component, useState} from 'react';
import {storage} from '../../config/fbConfig'
import './../../style.css'


// currently using this 
class UploadImage extends Component {
    constructor() {
        super();
        this.state = {image:[],progress:''};
        this.handleUpload = this.handleUpload.bind(this); 
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
    handleUpload = () => {
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({
              progress:progress
            })
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(this.state.image.name)
              .getDownloadURL()
              // Url gets generated in this promise, we then set the parents "val" to urll
              .then(urll => {
                this.props.methodfromparent(urll)
              })
          }
        );
      };

    render() {
        return (
            <div>
            <div className="input-field">
                <progress value={this.state.progress} max="100" />
                <label htmlFor="img">Image</label>
                <br></br>
                <br></br>
                <input type="file" id="image" onChange={this.handleChangeImage} />
                <br></br>
                <br></br>
                <button className="confirm-button" onClick={this.handleUpload}>Confirm</button>
            </div>
        </div>
        );
      }
}
export default UploadImage
