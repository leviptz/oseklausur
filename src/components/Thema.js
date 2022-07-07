import React from 'react'

export const Thema = ({ randomThema, showSolution, anzahlThemen, erledigt, onChange, input }) => {

  const handleOnChange = event => {
    onChange(event.target.value)
  }

  return (
    <div className='w-full flex justify-center content-center mt-12 mb-20'>
      <div className="flex flex-col w-9/12 border-opacity-50">
          <div>
            <h2 className='badge badge-primary p-3 m-3 font-semibold text-base'>Themen: {anzahlThemen}</h2>
            <h2 className='badge badge-primary p-3 m-3 font-semibold text-base'>erledigt: {erledigt}</h2>
          </div>
          <div className="divider"></div>
          <h2 className='badge badge-accent p-3 m-2 font-semibold'>Thema/Frage</h2>
          <div className="grid h-20 card bg-accent rounded-box place-items-center">{randomThema.thema}</div>
          <div className="divider"></div>
            <h2 className='badge badge-ghost p-3 m-2 font-semibold'>Antwort</h2>
            <textarea onChange={handleOnChange} value={input}className="grid h-60 card bg-base-300 rounded-box text-center" wrap="virtual" type="text" placeholder='schreibe hier'></textarea>
          {showSolution ? <><div className="divider"></div><h2 className='badge badge-secondary p-3 m-2 font-semibold'>Lösung</h2>
          <div className="grid h-60 card bg-secondary rounded-box place-items-center">{randomThema.solution}</div></> : <></>}
      </div>
    </div>
  )
}
