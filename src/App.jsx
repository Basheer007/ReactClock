import { useState, useEffect } from "react"


export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date())



  useEffect(() => {
    let time = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);

  }, [])
  function formatTime(time) {
    return time === 0 ? 12 : time > 12 ? time - 12 : time;
  }

  function prefixZero(time) {
    return time < 10 ? `0${time}` : time;
  }
  function date(value) {
    const option = { weekday: 'long', year: 'numeric', month: 'long' }
    return value.toLocaleDateString(undefined, option)
  }

  return (
    <>
      <main className="bg-slate-900 flex items-center justify-center min-h-screen">
        <div className="bg-white p-3 relative rounded-sm  flex gap-3 flex-col items-center">
          <h1 className="text-4xl text-orange-500">Digital clock</h1>
          <h1 className="text-3xl font-Lucky">{prefixZero(formatTime(currentTime.getHours()))}:{prefixZero(currentTime.getMinutes())}:{prefixZero(currentTime.getSeconds())}</h1>
          <h1>{date(currentTime)}</h1>
        </div>
      </main>

    </>
  );
}
