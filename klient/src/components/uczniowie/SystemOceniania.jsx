import React from 'react'

const SystemOceniania = () => {

  const [rating, setRating] = useState(initialSystemOceniania || 0);

  const handleSystemOceniania = (value) => {
    setS

  return (
    <div>
      {Arrayl.from({length: 5}).map((_, index) => 
      const starValue = index + 1;
      return (
        <span key={index} className={`text-x1 sm:text-2x1 cursor-pointer
         ${starValue <= SystemOceniania}`}>

        </span>
      )
      )}
    </div>
  )
}

export default SystemOceniania