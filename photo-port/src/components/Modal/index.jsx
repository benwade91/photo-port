import React from 'react';

let Modal = ({currentPhoto}) => {

    const {name, category, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={process.env.PUBLIC_URL + `/assets/large/${category}/${index}.jpg`} alt="current category" />
                <p>{description}</p>
                <button type="button">Close this modal</button>
            </div>
        </div>
    )
}

export default Modal;