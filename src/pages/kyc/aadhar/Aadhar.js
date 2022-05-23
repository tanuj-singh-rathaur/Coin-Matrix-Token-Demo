import React, { Component } from 'react'
import './Aadhar.css'
export default class Aadhar extends Component {

    state = {
 
        // Initially, no file is selected
        selectedFile: null
      };
      
      // On file select (from the pop up)
      onFileChange = event => {
      
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      
      };
      
      // On file upload (click the upload button)
      onFileUpload = () => {
        
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
      };
      
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
      
        if (this.state.selectedFile) {
           
          return (
            <div className="fileDetails">
              <h2>File Details:</h2>
               
  <p className="detail">File Name: {this.state.selectedFile.name}</p>
   
               
  <p className="detail">File Type: {this.state.selectedFile.type}</p>
   
               
  <p className="detail">
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p>
   
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <h4 className="upload_warning">Choose before Pressing the Upload button</h4>
            </div>
          );
        }
      };
      

    render() {
        return (
            <div className="aadhar_panel">
            <h1 className="head">Upload Aadhar Image</h1>
            <h3 className="subHead"> Please Upload A Clear Image/Picture For Fast Process Approval</h3>
            <div className="select">
                <input type="file" onChange={this.onFileChange} className="selectButton"/>
            </div>
          {this.fileData()}
          <button onClick={this.onFileUpload} className="uploadButton"> Upload </button>
            </div>
        )
    }
}
