
import "../globals.css"
import ChecklistPage from "../components/CheckList/CheckListPage"
export async function generateMetadata() {
   
  return {
      title: `Checklist Page  `, // Dynamic title
      description: `Checklist Page,IMT Checklist  Page, IMTS`, // Dynamic description
  };
}
const CheckList=()=>
{
  return (
    <div>
        <ChecklistPage/>
    </div>
  )
}
export default CheckList;