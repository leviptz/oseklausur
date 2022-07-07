import React from 'react'
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();

    const handleOnClickLearning = () => {
        navigate("/Learning")
    }

    const handleOnClickTable = () => {
      navigate("/Table")
    }

  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
        <div className="max-w-md">
            <h1 className="text-5xl font-bold">ProzessMod. Klausurvorbereitung</h1>
            <p className="py-6">Es gibt mehr als 100 Fragen/Themen zu denen du etwas schreiben kannst.
            Versuche so viel Wissen wie möglich in den Antwort Kasten zu schreiben. 
            Wenn du nicht weiter weißt oder die Lösung sehen möchtest klicke auf den Button "Lösung".
            Um die nächste Frage zu sehen klicke auf den Button "nächstes Thema".
            Du kannst alle Fragen/Themen, Lösungen und deine eingegeben Antwort unter den Button "Zeige alle Themen/Fragen" sehen.
            <br/>Happy Learning!</p>
            <button onClick={handleOnClickLearning} className="btn btn-primary mx-4">Zum Learning</button>
            <div className="alert alert-warning shadow-lg mt-12">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>Der Fortschritt wird beim Refresh oder Verlassen der Seite nicht gespeichert!</span>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}
