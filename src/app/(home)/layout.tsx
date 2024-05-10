import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-800 px-8 py-6 border-2">
          {children}
        </div>   
    ) 
}

