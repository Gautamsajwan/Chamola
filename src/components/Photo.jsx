import React, { useContext, useState } from 'react'
import Webcam from 'react-webcam'
import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Photo = () => {

    const context = useContext(AuthContext)
    const {image, setImage} = context
    const navigate = useNavigate()

    const webcamRef = React.useRef(null)
    const capture = React.useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setImage(pictureSrc)
    })


  return (
    <div>
      <h2 className="mb-5 text-center">
        React Photo Capture using Webcam Examle
      </h2>
      <div>
        {image == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>
      <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
      </div>
          <button onClick={() => {navigate('/SignUp')}}>Back to SignIn</button>
    </div>
  )
}
export default Photo