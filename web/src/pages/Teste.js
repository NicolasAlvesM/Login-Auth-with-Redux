import React, { useCallback, useState } from 'react'

const CountButton = React.memo(function CountButton({onClick, count}) {
    console.log('exe')
    return <button className="btn btn-outline-info" onClick={onClick}>{count}</button>
  })
  
  function DualCounter() {
    const [count1, setCount1] = useState(0)
    const increment1 = useCallback(() => setCount1(c => c + 1), [])
    const [count2, setCount2] = useState(0)
    const increment2 = useCallback(() => setCount2(c => c + 1), [])
    return (
      <>
        <CountButton count={count1} onClick={increment1} />
        <CountButton count={count2} onClick={increment2} />
      </>
    )
  }
  export default DualCounter