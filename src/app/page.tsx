import Nav from "@/components/NavegationComponents/Nav";
import SideBar from "@/components/NavegationComponents/SideBar";
import ContentChart from "@/components/SectionsComponents/ContentChart";
export default function Home() {
  return (
    <main className="bg-gray-900 h-screen">
      <Nav/>
      <div id="grid-template" className=" h-[90%]">
        <SideBar/>
        <ContentChart/>
      </div>
    </main>
  );
}
