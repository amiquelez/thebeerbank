import React from 'react';

const itemView = () => (
    <div>
        <div className="content_image">
            <img src="https://images.punkapi.com/v2/4.png" alt="Beer" />
        </div>
        <div className="summary">
            <h3>Trashty Blondie</h3>
            <p className="slogan">You know you shouldnt</p>
            <hr />
            <div className="details">
                <span>IBU: 41.5%</span>
                <span>ABV: 4.1%</span>
                <span>EBC: 15%</span>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
)

export default itemView;