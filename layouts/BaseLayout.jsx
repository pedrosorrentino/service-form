import Head from 'next/head'

const BaseLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='Universal form made with love OrdepDesign'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container md:w-[1440px] md:mt-20 mx-auto'>
        {children}
      </main>
    </>
  )
}

export default BaseLayout
