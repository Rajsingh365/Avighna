import React from 'react'

function Progress1({imagePercent}) {
  return (
    <progress className="progress progress-warning w-56" value={imagePercent} max="100"></progress>
  )
}

export default Progress1