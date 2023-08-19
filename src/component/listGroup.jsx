function listGroup({ newData, setNewData, addToTable }) {
  return (
    <div className="list-group">
      {newData.map((item) => (
        <a
          key={item.id}
          href="#"
          className="list-group-item list-group-item-action"
          onClick={() => addToTable(item)}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{item.name}</h5>
            <small>{"$" + item.price}</small>
          </div>
          <p className="mb-1">{item.description}</p>
        </a>
      ))}
    </div>
  );
}

export default listGroup;
