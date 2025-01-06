{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App=()=>{
    return(
        <>
        <div>
            {/* <h1>Saurabh anand</h1> */}
            <UseMemo/>
            <ReactMemo/>
        </div>
        </>
    )
}
export default App;