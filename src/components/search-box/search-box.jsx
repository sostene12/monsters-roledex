import './search-box.css';

export const SearchBox = ({placeholder,handleChange}) => {
    return ( 
        <div className="search">
        <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        className='search'
      />
        </div>
     );
}
 