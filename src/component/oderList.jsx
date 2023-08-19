function oderList({ submitData, submitTotalPrice, submitRemark }) {
  return (
    <>
      <h5>訂單</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">數量</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        {submitData.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className="text-end">
        備註: <span>{submitRemark}</span>
      </div>
      <div className="text-end">
        <h5>
          總計: <span>${submitTotalPrice()}</span>
        </h5>
      </div>
    </>
  );
}

export default oderList;
