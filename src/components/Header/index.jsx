import "./style.css"
export function Header(){
    return(
        <header>
            <div className="search-container">
                <input type="text" className="search" placeholder='Search'/>
                <i className="icon"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.76471 8.76471L12 12M10.0588 5.52941C10.0588 8.03094 8.03094 10.0588 5.52941 10.0588C3.02789 10.0588 1 8.03094 1 5.52941C1 3.02789 3.02789 1 5.52941 1C8.03094 1 10.0588 3.02789 10.0588 5.52941Z" stroke="#757575" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </i>
            </div>
        </header>
    )
}