import React from 'react';


const Comments=({handleChange, onSubmit}) => {
    
    
    return (
        
        <form onSubmit={onSubmit}>
        <label>
         Enter Comments here ....
          <textarea  onChange={handleChange} type="text" />
        </label>
        <input type="submit" value="Submit" onSubmit={onSubmit} />
      </form>

    )
}

export default Comments

