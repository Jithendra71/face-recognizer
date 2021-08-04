import React from 'react';

const Rank = ({name,entries})=>{
    return(<>
        <div className='white f3'>
            {`${name},Your current no. of submissions are ...`}
        </div>
        <div className='white f1'>
            {entries}
        </div>
        </>
    )
}

export default Rank;