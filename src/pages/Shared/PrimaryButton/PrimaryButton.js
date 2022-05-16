import React from 'react';

const PrimaryButton = ({props}) => {
    return (
        <button class="btn btn-primary uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary">{props}</button>
    );
};

export default PrimaryButton;