import React, {useEffect, useRef, useState} from 'react'
import uniqid from 'unigid';
import Quill from 'quill';
import { assets } from '../../assets/assets';

const DodajKurs = () => {

  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [image, setImage] = useState(null)
  const [chapters, setChapters] = useState([]);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lecturedetails, setLectureDetails] = useState(
    {
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    }
  )

  useEffect(()=>{
    if(!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      })
    }
  }, [])

  return (
    <div>
      <form>
        <div>
          <p>Tytuł kursu</p>
          <input onChange={e => setCourseTitle(e.target.value)} value={courseTitle}
           type='text' placeholder='Wpisz tu' required />
        </div>
        <div>
          <p>Opis kursu</p>
          <div ref={editorRef}></div>
        </div>

        <div>
          <div>
            <p>Cena kursu</p>
            <input onChange={e => setCoursePrice(e.target.value)}
             value={coursePrice} type="number" placeholder='0' required />
          </div>
          <div>
            <p>Miniaturka kursu</p>
            <label htmlFor="thumbnailImage">
              <img src={assets.file_upload_icon} alt="" />
              <input type="file" id='thumbnailImage' onChange={e => setImage
                (e.target.files[0])} accept="image/*" hidden />
              <img src={image ? URL.createObjectURL (image) : ''} alt="" />
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DodajKurs