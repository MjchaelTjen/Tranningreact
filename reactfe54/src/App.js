import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinDing from './DataBinding/DataBinDing';
import DataBIndingClassComponent from './DataBinding/DataBindingClassComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './DemoState/DemoState';
import BaiTapChonXe from './DemoState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">

      {/* <DemoFunctionComponent />
     <DemoReactClassComponent></DemoReactClassComponent> */}

      {/* <BaiTapLayout></BaiTapLayout> */}

      {/* <DataBinDing /> */}

      {/* <DataBIndingClassComponent/> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <DemoState></DemoState> */}
      {/* <BaiTapChonXe/> */}
      <RenderWithMap/>
    </div>
  );
}

export default App;
