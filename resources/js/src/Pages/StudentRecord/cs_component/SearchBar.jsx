import React, { useEffect, useState } from 'react'

function SearchBar(props) {
  const [isVisible, setVisible] = useState(false);
  const {searchValue, setDataSearch = [], onChangeText, onSelectedItem} = props;

  useEffect(() => {
    handleMounted();
  }, [searchValue]);

  const handleMounted = () =>{ 
    if(searchValue) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    window.document.addEventListener('click', (event) => {
      setVisible(false)
    });
    $(document).on('keyup', (evt) => {
        if(evt.keyCode == 27){
          setVisible(false)
        }
    });
  }

  return (
    <div className="my-auto w-full lg:w-1/3 relative">
        <input type="text"
            className="form-control search-box text-sm" 
            placeholder="Search ..." 
            onChange={onChangeText}
            value={searchValue}
        />
        {isVisible && <div className="absolute bg-white w-full my-1 rounded-md shadow-md overflow-y-auto max-h-56 z-[1000] border border-gray-600">
          <ul className="">
            {setDataSearch.map((value, index) => (
              <li className="hover:bg-gray-100 py-2 px-4 border-b border-b-gray-300" key={index}>
                  <a className="hover:text-black cursor-pointer" onClick={(event) => {event.preventDefault(); onSelectedItem(value)}}>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold">Student ID: {value.Student_ID}</span> 
                        <span className="text-xs text-gray-500">{value.Lastname}, {value.Firstname} {value.Middlename[0]}.</span>
                    </div>
                  </a>
              </li>)
            )}
            {setDataSearch.length == 0 && <li>
              <div className="py-2 px-2 text-center text-gray-500  text-sm">
                No record found
              </div>
            </li>}
          </ul>
        </div>}
    </div>
  )
}

export default SearchBar