import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {MdNavigateNext} from 'react-icons/md'

function Addvideo(props) {
  const {video, setvideo} = props;
  const [Videoname, setVideoname] = useState('No file choosen')
  const [Click, setClick] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
      setvideo(acceptedFiles[0])
      setVideoname(acceptedFiles[0].name)
  }, [])


  const {acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept:{
      'video/mp4':['.mp4']
    },
    maxFiles:1,
    maxSize:10000000,
    onDrop
  }) 

  return (
    <div className='outline cursor-pointer'>
          
      <section className='dropzone-video'> 
        <div {...getRootProps()}>
        <input {...getInputProps()} required/>
          <p>Drag and drop your Video here</p>
          <p>Or, <strong>browse to upload</strong></p>
      </div>
      </section>
      <div className="cursor-pointer">
          <span onClick={() => {setClick(!Click)}}>{Videoname}</span>
          {video && <MdNavigateNext onClick={() => {setClick(!Click)}} style={Click ? {transform: "rotate(-90deg)"} : {transform: "rotate(90deg)"}}/>}
          {Click && video && <div className="w-[100px] h-24">
              <video src={URL.createObjectURL(video)} alt="video" />
          </div>}
      </div> 
    </div>
  )
}

export default Addvideo