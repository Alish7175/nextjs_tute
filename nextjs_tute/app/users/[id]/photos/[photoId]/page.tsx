import React from 'react'

interface IPhotoProps {
    params: {id: number, photoId:number}
}
const PhotoPage = ({params: {id, photoId}}: IPhotoProps) => {
  return (
    <div>
        PhotoPage {id} {photoId}
    </div>
  )
}

export default PhotoPage
