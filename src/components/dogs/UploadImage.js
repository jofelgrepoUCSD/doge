import React, { Component, useState} from 'react';
import {storage} from '../../config/fbConfig'


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
                {/* <button className="btn blue lighthen-1 z-depth-0" onClick={() => { this.handleUpload(); this.handleChangeUrl();}}>Create</button> */}
                <button className="btn blue lighthen-1 z-depth-0" onClick={this.handleUpload}>Confirm</button>
            </div>
        </div>
        );
      }
}
export default UploadImage
