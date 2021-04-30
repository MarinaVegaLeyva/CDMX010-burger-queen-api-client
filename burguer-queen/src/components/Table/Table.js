import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import './table.css'
import BreakfastItem from '../BreakFastItem/Breakfast';

const Table = () => {

  return (
  <Tabs>
      <TabList>
        <Tab><h2>DESAYUNOS</h2></Tab>
        <Tab><h2>ALMUERZO/CENA</h2></Tab>
      </TabList>

      <TabPanel>
        <div className='contentTable'>
          <BreakfastItem product='Café americano' price='5'/>
          <BreakfastItem product='Sándwich de jamón con queso' price='10'/>
          <BreakfastItem product='Jugo de frutas natural' price='7'/>
          <BreakfastItem product='Café con leche' price='7'/>
        </div>
      </TabPanel>
      <TabPanel>
      <div className='contentTable'>
        <BreakfastItem product='Hamburguesa simple' price='10'/>
          <BreakfastItem product='Hamburguesa doble' price='15'/>
          <h2>Acompañamientos</h2>
          <BreakfastItem product='Papas fritas' price='5'/>
          <BreakfastItem product='Aros de cebolla' price='5'/>
        </div>
      </TabPanel>
  </Tabs>
  );
}
 
export default Table;