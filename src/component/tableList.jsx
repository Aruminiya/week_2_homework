function tableList({
  choosedData,
  setChoosedData,
  totalPrice,
  submitOrder,
  remark,
  setRemark,
}) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50">
              操作
            </th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col" width="90">
              數量
            </th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        {choosedData.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => {
                      const updatedData = choosedData.filter(
                        (data) => data.id !== item.id
                      );
                      setChoosedData(updatedData);
                    }}
                  >
                    x
                  </button>
                </td>
                <td>{item.name}</td>
                <td>
                  <small>{item.description}</small>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => {
                      const updatedData = choosedData.map((data) => {
                        if (data.id === item.id && item.count > 1) {
                          data.count--;
                        }
                        return data;
                      });
                      setChoosedData(updatedData);
                    }}
                  >
                    -
                  </button>
                  {item.count}
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => {
                      const updatedData = choosedData.map((data) => {
                        if (data.id === item.id) {
                          data.count++;
                        }
                        return data;
                      });
                      setChoosedData(updatedData);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>{item.price}</td>
                <td>{item.price * item.count}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className="text-end mb-3">
        <h5>
          總計: <span>${totalPrice()}</span>
        </h5>
      </div>
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="備註"
        value={remark}
        onChange={(e) => {
          setRemark(e.target.value);
        }}
      ></textarea>
      <div className="text-end">
        <button className="btn btn-primary" onClick={submitOrder}>
          送出
        </button>
      </div>
    </>
  );
}

export default tableList;
