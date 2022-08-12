import "./style.css"
export function Aside(){
    return (
        <div className="Aside">
            <h1 className="title">Paris</h1>
            <span className="small-info">
                <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12L10 10V5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    : 14 Horas
                </p>
                <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 10C19 14.9706 14.9706 19 10 19M19 10C19 5.02944 14.9706 1 10 1M19 10C19 10 13.5147 10 10 10C6.48528 10 1 10 1 10M10 19C5.02944 19 1 14.9706 1 10M10 19C7.14508 16.4226 6 13.8462 6 10C6 6.15378 7.14508 3.57736 10 1M10 19C12.8549 16.4226 14 13.8462 14 10C14 6.15378 12.8549 3.57736 10 1M1 10C1 5.02944 5.02944 1 10 1" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    : França
                </p></span>
            <p className="description">Paris, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena. A cidade é conhecida por monumentos como a Torre Eiffel e a Catedral de Notre-Dame.</p>
            <a href="#" className="button-link" onClick={(e) => e.preventDefault()}>
                Discover
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00012 0.999771L8.00012 7.99977L1.00012 14.9998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    )
}
