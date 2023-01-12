function SketchMenu() {
  return (
    <div 
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-200 rounded-r-md w-48 flex flex-col">
        <p className='text-2xl px-4 mt-2'>Flowers</p>
        <ul>
          <li className='flex my-2'>
            <p className='px-4 py-2'>Lily</p>
            <p className='ml-auto px-4 py-2 mr-2 cursor-pointer rounded hover:bg-red-300 transition-all'>Add</p>
          </li>
          <li className='flex my-2'>
            <p className='px-4 py-2'>Rose</p>
            <p className='ml-auto px-4 py-2 mr-2 cursor-pointer rounded hover:bg-red-300 transition-all'>Add</p>
          </li>
          <li className='flex my-2'>
            <p className='px-4 py-2'>Daffodil</p>
            <p className='ml-auto px-4 py-2 mr-2 cursor-pointer rounded hover:bg-red-300 transition-all'>Add</p>
          </li>
          <li className='flex my-2'>
            <p className='px-4 py-2'>Tulip</p>
            <p className='ml-auto px-4 py-2 mr-2 cursor-pointer rounded hover:bg-red-300 transition-all'>Add</p>
          </li>
        </ul>
    </div>
  )
}

export default SketchMenu
