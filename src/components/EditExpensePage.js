import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            I love Yuka {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;