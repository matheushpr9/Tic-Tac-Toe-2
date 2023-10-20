'use client';

export default function PlayButton(){
    const handleClick = () => {
        location.href = 'http://localhost:3000/board'
      };

    return(
        <button className="PlayButton" onClick={handleClick}> Play </button>
    )
}
