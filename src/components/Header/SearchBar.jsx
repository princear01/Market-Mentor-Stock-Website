import {useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import {useNavigate} from 'react-router-dom';

function SearchBar() {

    const [searchText,setSearchText] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {setSearchText(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        navigate(`/stock/${searchText}`)
    }

    return (
        <div className={styles.searchContainer}>
            <input type="text" onChange={onChange}/>
            <div className={styles.SearchIcon}>
                <SearchIcon onClick={submit}/>
            </div>
        </div>
    )
}

export default SearchBar