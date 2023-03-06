import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { classNames } from '../../utilities';

function CustomTextArea(props) {
  const {onChange, error = false, errorMessage} = props;
  return (
    <div className="text-editor">
        <label 
          htmlFor="details-text-id" 
          className={classNames("text-sm text-gray-600 my-2", error && "text-red-500")}>Details <span className="text-red-600">*</span></label>
          {error && <span className="text-sm text-red-500">{' '}{errorMessage}</span>}
        <ReactQuill 
            id="details-text-id"  
            modules={toolBar} 
            formats={formats} 
            className='h-48'
            theme="snow"
            onChange={onChange}
            placeholder="Write notes..." 
        /> 
        
    </div>
  )
}

const toolBar = {
    toolbar: [ 
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }], 
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'size': []}],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ]
}

const formats = [
  'header',  'color', 
  'background','bold', 
  'italic', 'underline', 
  'strike', 'blockquote',
  'size',  'list', 'bullet', 'indent', 
  'link', 'image'
];

export default CustomTextArea