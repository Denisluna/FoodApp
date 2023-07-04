import { styled } from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";


function Search() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/Searched/' + inputVal);
  }

  return (
    <SForm onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input onChange={(e) => setInputVal(e.target.value)} type="text"></input>
      </div>
    </SForm>
  )
}

const SForm = styled.form`
    margin: 2rem 15rem;
    div {
      width: 100%;
      position: relative;
    }

    input {
        border-radius: 2rem;
        border: none;
        outline: none;
        padding: 1rem 2.5rem;
        font-size: 1.5.rem;
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search