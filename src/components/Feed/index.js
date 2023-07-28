import Header from "../Header"
import { BsThreeDots } from "react-icons/bs"
import Post from "../Post"

const Feed = () => {
  return (
    <div className='w-full h-full bg-[#FAFAFA]'>
    
    
    
    
        <Header/>
        <div className="grid w-full grid-cols-3 gap-6 max-w-screen-lg mt-10 mx-auto">
            
            <div className="w-full border-t-2 border-pink-500  col-span-2 flex flex-col space-y-5">

                <section className="bg-white overflow-x-scroll border border-black/10 p-4 flex space-x-4">     
                    {
                        new Array(20).fill(0).map((_, i) => (
                        <div key={i} className="rounded-full bg-black border-2 ring-offset-2 ring-[2px] ring-pink-500 flex-none w-14 h-14 " />
                        
                    ))} 
                
                </section>
                <section className="gap-y-4 flex flex-col">
                    {
                        new Array(10).fill(1).map((_, i) => (
                            <Post key={i} postIndex={i}/>
                        ))
                    }
                </section>

            </div>
        
            {/* This is the sidebar */}
            <div className="fixed right-[25%]">
                
                <div className="flex">
                This is the sidebar
                </div>
            </div>
        </div>

    </div>
        
  )
}

export default Feed