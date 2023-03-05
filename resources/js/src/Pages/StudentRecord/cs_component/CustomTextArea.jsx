import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CustomTextArea(props) {
  const {onChange} = props;
  return (
    <div className="text-editor">
        <label htmlFor="details-text-id" className="text-sm text-gray-600 my-2">Details <span className="text-red-600">*</span></label>
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
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ]
}

const formats = [
  'header', 'color', 
  'background','bold', 
  'italic', 'underline', 
  'strike', 'blockquote', 
  'list', 'bullet', 'indent', 
  'link', 'image'
];

export default CustomTextArea