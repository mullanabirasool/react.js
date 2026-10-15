
import React, { useEffect, useState } from 'react'
import { fetchMovieDetails } from '../../Api/Api'
import Button from '../../Component/Button/Button'
import Trailer from '../Trailer/Trailer'
import Modal from '../../Component/Modal/Modal'
import useModal from '../../Hooks/useModal'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Modaldetails.scss'
import Loader from '../../Component/Loader/Loader'
import formatDate from '../../Utils/formatDate'
import CastDetails from '../CastDetails/CastDetails'


const Modaldetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isOpen, openModal, closeModal } = useModal()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchMovieDetails(id)
      .then((d) => {
        setData(d)
      })
  }, [id])

  function handleClick() {
    navigate('/')
  }

  if (!data) {
    return <Loader />
  }

  return (
    <section
      className="movie-page"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
      }}
    >
      <div className="movie-page_overlay">
        <div className="movie-page_content">
          <div className="movie-page_tag">
            MOVIE
          </div>
          <h1 className="movie-page_title">
            {data.original_title}
          </h1>
          <div className="movie-page_meta">
            <span> ⭐ {data.vote_average} </span>
            <span> {formatDate(data.release_date)}</span>
          </div>
          <div className="movie-page_overview">
            {data.overview}
          </div>

          <div className="movie-page_actions">

            <Button
              title="Back to Home"
              onClick={handleClick}>
              ← Back to Home
            </Button>

            <Button
              title="Watch trailer"
              onClick={openModal}>
            
              Watch Trailer
            </Button>

          </div>

        </div>

        <div className="movie-page_trailer">
          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            title="Movie trailer"
          >
            <Trailer id={id} />
          </Modal>
        </div>
      
          {/* <CastDetails id={id} /> */}

      </div>
      <div><CastDetails id={id} />
       </div>
    </section>
  )
}

export default Modaldetails

