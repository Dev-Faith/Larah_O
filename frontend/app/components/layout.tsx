import Navbar from "../constants/Navbar/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
    return (
      <div>
        <Navbar/>
        {children}
    </div>
    
  )
};