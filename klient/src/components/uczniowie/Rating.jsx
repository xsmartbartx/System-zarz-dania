import React, { use } from 'react'

const Rating = () => {

  const [rating, setRating] = useState(initialRating || 0);

  const handleRating = (value) => {
    setRating(value);
    if(onRate) onRate(value);
  }

  useEffect(() => {
    if(initialRating) {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div>
      {Arrayl.from({length: 5}).map((_, index) => 
      const starValue = index + 1;
      return (
        <span key={index} className={`text-x1 sm:text-2x1 cursor-pointer
         ${starValue <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>

        </span>
      )
      )}
    </div>
  )
}

export default Rating