
export default function Home() {
  return (
     <main className="grid grid-cols-2 min h-screen">
      {/*left*/}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden  border-r border-white/10">
       <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full "/>
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes "/>



      </div>



      <div className="flex flex-col p-16 " >
       <div className="flex flex-1 items-center justify-center ">
       <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou  nehuma lembrança, comece a <a href="" className="underline hover:text-gray-50">criar agora</a></p>
       </div>
      </div>
      {/*right*/}
     </main>

  )
}
