import { useEffect, useState } from "react";
import Products from "./Products";
import Menu from "./Menu";
import Bag from "./Bag";
import Siderbar from "./Siderbar";
import Signup from "./Signup";
import Login from "./Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemView from "./ItemView";
import Futter from "./Futter";
import Oderpage from "./Oderpage";
function App() {
  let [datas, setdatas] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [stoggle, setstoggle] = useState(true);
  let [bagdata, setbagdata] = useState([]);
  let [inputvalue, setinputvalue] = useState("");
  const [rangeValue, setrangeValue] = useState(1000);
  let [buttonfind, setbuttonfind] = useState();
  let [btncolorchange, setbtncolorchange] = useState(null);
  let [hidesidebar, sethidesidebar] = useState();
  let [oderitem, setoderitem] = useState([]);
  let data = datas.filter((data) => {
    return (
      data.title.toLowerCase().includes(inputvalue) && // input
      data.price <= rangeValue && //range
      (buttonfind ? data.category === buttonfind : true) // button
    );
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdatas(data);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Menu
          toggle={toggle}
          setToggle={setToggle}
          bagdata={bagdata}
          stoggle={stoggle}
          setstoggle={setstoggle}
          inputvalue={inputvalue}
          setinputvalue={setinputvalue}
          hidesidebar={hidesidebar}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                sethidesidebar={sethidesidebar}
                data={data}
                setbagdata={setbagdata}
                stoggle={stoggle}
              />
            }
          />
          {data.map((data, index) => {
            return (
              <Route
                key={index}
                path={`${data.id}`}
                element={<ItemView data={data} setoderitem={setoderitem} />}
              />
            );
          })}

          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />

          <Route path="Oderpage" element={<Oderpage oderitem={oderitem} />} />
        </Routes>
        <Futter />
      </BrowserRouter>

      <Siderbar
        stoggle={stoggle}
        rangeValue={rangeValue}
        setrangeValue={setrangeValue}
        datas={datas}
        data={data}
        setbuttonfind={setbuttonfind}
        buttonfind={buttonfind}
        btncolorchange={btncolorchange}
        setbtncolorchange={setbtncolorchange}
        hidesidebar={hidesidebar}
      />
      <Bag toggle={toggle} bagdata={bagdata} setbagdata={setbagdata} />
    </>
  );
}

export default App;
