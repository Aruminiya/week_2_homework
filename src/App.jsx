import ListGroup from "./component/listGroup";
import TableList from "./component/tableList";
import OderList from "./component/oderList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      name: "珍珠奶茶",
      description: "香濃奶茶搭配QQ珍珠",
      price: 50,
      count: 1,
    },
    {
      id: 2,
      name: "冬瓜檸檬",
      description: "清新冬瓜配上新鮮檸檬",
      price: 45,
      count: 1,
    },
    {
      id: 3,
      name: "翡翠檸檬",
      description: "綠茶與檸檬的完美結合",
      price: 55,
      count: 1,
    },
    {
      id: 4,
      name: "四季春茶",
      description: "香醇四季春茶，回甘無比",
      price: 45,
      count: 1,
    },
    {
      id: 5,
      name: "阿薩姆奶茶",
      description: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50,
      count: 1,
    },
    {
      id: 6,
      name: "檸檬冰茶",
      description: "檸檬與冰茶的清新組合",
      price: 45,
      count: 1,
    },
    {
      id: 7,
      name: "芒果綠茶",
      description: "芒果與綠茶的獨特風味",
      price: 55,
      count: 1,
    },
    {
      id: 8,
      name: "抹茶拿鐵",
      description: "抹茶與鮮奶的絕配",
      price: 60,
      count: 1,
    },
  ];

  const [newData, setNewData] = useState(data); //將原始資料使用 useState 響應
  const [choosedData, setChoosedData] = useState([]); //選擇商品期間資料變化的保存
  const [submitData, setSubmitData] = useState([]); //送出訂單後資料的保存

  const [remark, setRemark] = useState(""); //備註資料
  const [submitRemark, setSubmitRemark] = useState(""); //提交備註資料

  function addToTable(item) {
    const itemIndex = choosedData.findIndex(
      (listdata) => listdata.id === item.id
    );

    if (itemIndex !== -1) {
      // 商品已存在，更新数量
      const updatedData = [...choosedData];
      updatedData[itemIndex].count += 1;

      setChoosedData(updatedData);
    } else {
      // 商品不存在，添加到列表
      setChoosedData((prevData) => [...prevData, item]);
    }
  }

  function totalPrice() {
    let total = 0;
    choosedData.forEach((data) => {
      total += data.price * data.count;
    });
    return total;
  }

  function submitOrder() {
    setSubmitRemark(remark);
    setSubmitData(choosedData);

    setRemark(""); // 先清空 remark
    setChoosedData([]); // 清空 choosedData
  }

  function submitTotalPrice() {
    let total = 0;
    submitData.forEach((data) => {
      total += data.price * data.count;
    });
    return total;
  }

  return (
    <div id="root">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <ListGroup
              newData={newData}
              setNewData={setNewData}
              addToTable={addToTable} //從父組件中傳入函數給子組件
            />
          </div>
          <div className="col-md-8">
            <TableList
              choosedData={choosedData}
              setChoosedData={setChoosedData}
              totalPrice={totalPrice}
              submitOrder={submitOrder}
              remark={remark}
              setRemark={setRemark}
            />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <OderList
                    choosedData={choosedData}
                    submitData={submitData}
                    submitTotalPrice={submitTotalPrice}
                    remark={remark}
                    submitRemark={submitRemark}
                    setSubmitRemark={setSubmitRemark}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
