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

  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Wpisz nazwę rozdziału:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId ===chapterId ? {...chapter, collapsed: !chapter.collapsed} :chapter
        )
      );
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === 'remove') {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId ===chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter;
        })
      );
    }
  };

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder: chapter.chapterContent.length > 0 ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1 : 1,
            lectureId: uniqid()
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  useEffect(()=>{
    if(!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      })
    }
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <div>
          <p>Zniżka</p>
          <input onChange={e. setDiscount(e.target.value)} value={discount}
           type="number" placeholder='0' min={0} max={100} required />
        </div>
        <div>
          {chapters.map((chapter, chapterIndex) =>(
            <div key={chapterIndex}>
              <div>
                <div>
                  <img onClick={() => handleChapter('toggle', chapter.chapterId)} src={assets.dropdown_icon} width={14} alt="" />
                  <span>{chapterIndex + 1} {chapter.courseTitle}</span>
                </div>
                <span>{chapter.chapterContent.length} Wyklady</span>
                <img onClick={() => handleChapter('remove', chapter.chapterId)} src={assets.cross_icon} alt="" />
              </div>
              {! chapter.collapsed && (
                <div>
                  {chapter.chapterContent.map((lecture, lectureIndex)=>(
                    <div key={lectureIndex}>
                      <span>{lectureIndex + 1} {lecture.lectureTitle}
                         - {lecture.isPreviewFree ? 'Darmowy podgląd'
                          : 'Zapłacone'}</span>
                      <img src={assets.cross_icon} alt="" onClick={()=>handleLecture
                        ('remove', chapter.chapterId, lectureIndex)} />
                    </div>
                  ))}
                  <div onClick={() => handleChapter('add', chapter.chapterId)}>
                    + Dodaj wykład
                  </div>
                </div>
              )}
            </div>
          ))}
          <div onClick={() => handleChapter('add')}>
            + Dodaj rozdział
          </div>

          {showPopup && (
            <div>
              <div>
                <h2>Dodaj wykład</h2>

                <div>
                  <p>Tytuł wykładu</p>
                  <input type="text" value={lectureDetails.lectureTitle}
                   onChange={(e) => setLectureDetails({...lectureDetails,
                    lectureTitle: e.target.value})} />
                </div>

                <div>
                  <p>Czas trwania (minutes)</p>
                  <input type="number" value={lectureDetails.lectureDuration}
                   onChange={(e) => setLectureDetails({...lectureDetails,
                    lectureDuration: e.target.value})} />
                </div>

                <div>
                  <p>Czy podgląd jest darmowy?</p>
                  <input type="checkbox" checked={lectureDetails.isPreviewFree}
                   onChange={(e) => setLectureDetails({...lectureDetails,
                    lectureUrl: e.target.value})} />
                </div>
                
                <button type='button' onClick={addLecture}>Dodaj</button>

                <img onClick={() => setShowPopup(false)} src={assets.cross_icon} alt="" />
              </div>
            </div>
          )}
        </div>
        <button type='submit'>DODAJ</button>
      </form>
    </div>
  )
}

export default DodajKurs