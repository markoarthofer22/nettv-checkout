import React, { useState } from 'react';

//this Acordion takes data in form of array
//it is important that each item in array contains an ID

const Acordion = props => {
    const { data } = props;

    const [index, setIndex] = useState(null);

    const onClickHandler = id => {
        if (id === index) {
            setIndex(null);
        } else {
            setIndex(id);
        }
    };

    return (
        <div className="acordion">
            {data.map(item => {
                return <AcordionItem onClickHandler={onClickHandler} index={index} key={item.id} {...item} />;
            })}
        </div>
    );
};

const AcordionItem = props => {
    const { title, content, onClickHandler, id, index } = props;

    return (
        <>
            <div onClick={() => onClickHandler(id)} className="acordion-item">
                <div className={`acordion-icon ${id === index ? 'acordion-icon-active' : ''}`}></div>
                <div className="acordion-title">{title}</div>
            </div>
            <div className={`acordion-content ${id === index ? 'acordion-content-active' : ''}`}>{content}</div>
        </>
    );
};

export default Acordion;
