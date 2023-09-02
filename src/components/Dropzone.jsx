import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {MdNavigateNext} from 'react-icons/md'


export default function Dropzone(props) {

  const {pdf, setPdf} = props;
  const [pdfName, setPdfName] = useState('No file choosen')
  const [Click, setClick] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
      setPdf(acceptedFiles[0])
      setPdfName(acceptedFiles[0].name)
  }, [])


  const {acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept:{
      'application/pdf':['.pdf'],
    },
    maxFiles:1,
    maxSize:10000000,
    onDrop
  }) 

  return (
    <div className='outline cursor-pointer'>
          
      <section className='dropzone-pdf'> 
        <div {...getRootProps()}>
        <input {...getInputProps()} required/>
          <p>Drag and drop your image here</p>
          <p>Or, <strong>browse to upload</strong></p>
      </div>
      </section>
      <div className="cursor-pointer">
          <span onClick={() => {setClick(!Click)}}>{pdfName}</span>
          {pdf && <MdNavigateNext className='ShowPdf' onClick={() => {setClick(!Click)}} style={Click ? {transform: "rotate(-90deg)"} : {transform: "rotate(90deg)"}}/>}
          {Click && pdf && <div className="w-[100px] h-24">
            <iframe src={URL.createObjectURL(pdf)}></iframe>
          </div>}
      </div> 
    </div>
  )
}