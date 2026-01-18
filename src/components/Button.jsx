const Button=({handler, type, value=""})=>{
return(
  <button className={`px-5 py-2 rounded-md ${type=="Delete"? " bg-red-800 hover:bg-red-700": " bg-gray-800 hover:bg-gray-700"} text-white font-medium  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400`} onClick={handler} value={value}>{type}</button>
)
}

export default Button;