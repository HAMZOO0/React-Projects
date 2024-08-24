import { useState,useCallback, useEffect , useRef } from 'react'


function App() {
    // State hook to manage the length of the generated password number allowed & char allowed
  const [length, setLength] = useState(5)
  const[number_allowed, setNumber_allowed] = useState(false)
  const[char_allowed, setChar_allowed] = useState(false)
  const[password, set_password] = useState("")

  // ueref hook 
  const password_ref = useRef(null)

  const password_genrater = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number_allowed){
      str+="0123456789"
    }
    if(char_allowed){
      str += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
    // ! 0 or 1 
    for (let index = 0; index < length; index++) {
     let char = Math.floor(Math.random()*str.length)

     pass+= str.charAt(char)
      
    }
    set_password(pass)
    
  },[length,number_allowed,char_allowed])
  // If you don't include char_allowed and number_allowed in the dependency array of the useCallback hook, the password_genrater function will not be updated when those variables change. As a result, even if you tick the checkboxes for number_allowed and char_allowed, the password_genrater function will still use the old versions of those variables from the previous render.


const copy_to_clipboard = useCallback(()=>{

  password_ref.current?.select()
  
  window.navigator.clipboard.writeText(password)
  
},[password])
  useEffect(()=>{
    password_genrater()
  },[password_genrater, length , number_allowed , char_allowed])

  return (
    <>
     <div className='text-3xl h-screen w-full flex justify-center items-center max-w-full shadow-md rounded-lg flex-col'>
      <div className='bg-gray-700 h-48 w-5/12 flex justify-center items-center  flex-col rounded-lg' >
      <h2 className='text-3xl py-2 '> Password Genrater</h2>

     
      <div className='rounded-md '>
     
      {/* here i am adding password in input  */}
      <input type="text" value={password}  placeholder='Password' readOnly className='my-2 mx-2 py-1 px-1 rounded-md text-md text-orange-600' ref={password_ref} /> 

       <button className='my-2 mx-2 py-2 px-1 rounded-md bg-blue-600 text-md  ' onClick={copy_to_clipboard}>Copy</button>

      </div >

      <div className='flex justify-start w-full  text-cyan-400 text-base gap-x-2 px-12 items-center overflow-hidden'>

        <div className='flex items-center gap-x-1  text-cyan-400'>
<input type="range" min={5} max={100}  value={length} className=' cursor-pointer text-sm text-cyan-400' onChange={(e)=>setLength(e.target.value)}/>
<label className='px-0.5' >Length : {length}</label>
        </div>
        <div>
          <input type="checkbox" checked={number_allowed} onChange={(e)=>setNumber_allowed(e.target.checked)}/>
          <label className='px-2'>Numbers </label>
        </div>
        <div>
          <input type="checkbox" checked={char_allowed} onChange={(e)=>setChar_allowed(e.target.checked)}/>
          <label  className='px-1'>Characters </label>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
/*password_genrater runs → updates password → useEffect detects the change in password → runs password_genrater again → updates password again → and so on, creating a loop.*/