
const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-screen-full w-full bg-[#111827] overwflow-auto'>
      <div className='mx-auto max-w-screen-xl h-full'>
        {children}
      </div>
    </main>
  )
}

export default LandingLayout