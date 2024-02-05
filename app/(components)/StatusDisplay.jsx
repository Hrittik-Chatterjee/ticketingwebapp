const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
      case "started":
        color = "bg-yellow-200";
      case "not started":
        color = "bg-red-200";
    }
    return color;
  };
  return (
    <div>
      <span
        className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
          status
        )}`}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusDisplay;
