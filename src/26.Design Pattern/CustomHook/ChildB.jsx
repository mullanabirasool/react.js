import React from 'react'
import Usemodal from './Usemodal'

const ChildB = () => {
    const {open,handleToggle}=Usemodal()

  return (
    <div>
      <h1>Child B</h1>
    <button onClick={handleToggle}>Launch Demo Modal</button>
    {open && (
        <>
        <div className="modal-heading">Modal title</div>
        <div className="modal-body">Hey can u see me </div>
        <div className="modal-footer">
            <button onClick={handleToggle}> Close</button>
        </div>
        </>
    )

    }
    </div>
  )
}

export default ChildB