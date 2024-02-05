import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };
  return (
    <div className="flex bg-slate-700 hover:bg-slate-600 flex-col rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority}></PriorityDisplay>
        <div className="ml-auto">
          <DeleteBlock></DeleteBlock>
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className=" h-px border-0 mb-2 bg-slate-900" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
          <ProgressDisplay progress={ticket.progress}></ProgressDisplay>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status}></StatusDisplay>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
