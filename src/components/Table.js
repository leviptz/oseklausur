import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Table = ({ thema, changeSearch, search }) => {
    const navigate = useNavigate();

    const handleOnClickLearning = () => {
        changeSearch("");
        navigate("/Learning")
    }

    const handleOnChange = event => {
        changeSearch(event.target.value.toLowerCase())
    }

    const filteredData = thema.filter(filtered => {
        if (search === "") {
            return true;
        } else if (filtered.thema.toLowerCase().includes(search) || filtered.solution.toLowerCase().includes(search)){
            return true
        } else {
            return false
        }
    })
    
  return (
    <div className='w-full'>
        <div className='w-full flex justify-center content-center mt-10'>
            <button onClick={handleOnClickLearning} className="btn btn-primary mx-4">zum Learning</button>
            <input onChange={handleOnChange} type="text" placeholder="SUCHE" class="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div className="flex justify-center mt-20">
            <table className="table-auto text-xs md:text-base w-8/12 border-separate border-spacing-y-2 border-spacing-x-1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Thema/Frage</th>
                    <th>Lösung</th>
                    <th>Antwort</th>
                </tr>
                </thead>
                <tbody>
                    {filteredData.map(t => {
                        return (
                            <tr key={t.id}>
                                <th className='border bg-base-200 break-words'>{t.id}</th>
                                <td className='border bg-base-200 break-words'>{t.thema}</td>
                                <td className='border bg-base-200 break-words'>{t.solution}</td>
                                {t.answer ? <td className='border bg-orange-300 break-words'>{t.answer}</td> : <></>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
