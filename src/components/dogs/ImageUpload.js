import React, { Component, useState} from 'react';
import {render} from 'react-dom'
import {storage,firestore} from '../../config/fbConfig'
import firebase from '../../config/fbConfig';

import { useEffect, useRef } from "react";


const ImageUpload = (project) => {


    
    const [image,setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    const callback = () => {
      this.project.sendData(url)
    }

    
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url)
              });
          }
        );
      };

      

    return (
        <div>
            <div className="input-field">
                <label htmlFor="img">Image</label>
                <br></br>
                <br></br>
                <input type="file" id="img" onChange={handleChange} />
                <button className="btn blue lighthen-1 z-depth-0" onClick={handleUpload}>Create</button>
            </div>
        </div>
    );
};

export default ImageUpload
