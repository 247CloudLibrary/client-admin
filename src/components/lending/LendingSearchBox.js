import { useState } from "react";

const LendingSearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return(
        <div>
            <input type="text" placeholder="검색창" onChange={handleChange} value={searchTerm} />
            {/* <button onClick={}> 검색</button> */}
        </div>
    );

};


export default LendingSearchBox;