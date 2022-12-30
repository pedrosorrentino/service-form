const TitlePage = ({ title, desc }) => {
  return (
    <>
      <h2 className='text-slate-800 text-4xl font-bold'>{title}</h2>
      <p className='text-gray-500'>{desc}</p>
    </>
  )
}

export default TitlePage
