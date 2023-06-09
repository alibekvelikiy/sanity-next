import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextPage} from "next";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {

  const [isSsr, setIsSsr] = useState(true)

  useEffect(() => {
    setIsSsr(false)
  }, [])

  if (isSsr) return null
  return (
      <div>
        <Navbar/>
        <div className="flex gap-6 md:gap-20">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <Sidebar/>
          </div>
          <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
  )
}

export default MyApp
