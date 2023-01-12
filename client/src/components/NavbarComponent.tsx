function NavbarComponent() {
  return (
    <div className='absolute flex items-center w-full p-5 z-10'>
      <h1>This is navbar</h1>
      <ul className='flex ml-auto'>
        <li className='sm:mx-5 mx-2'>Login</li>
        <li className='sm:mx-5 mx-2'>Somthing</li>
        <li className='sm:mx-5 mx-2'>Other thing</li>
      </ul>
    </div>
  )
}

export default NavbarComponent