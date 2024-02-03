import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex bg-slate-700 hover:bg-slate-600 flex-col rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay></PriorityDisplay>
        <div className="ml-auto">
          <DeleteBlock></DeleteBlock>
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className=" h-px border-0 mb-2 bg-slate-900" />
      <p className="whitespace-pre-wrap">
        This is Ticket description . Please do this Ticket!
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">8/02/24 10:33PM</p>
          <ProgressDisplay></ProgressDisplay>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay></StatusDisplay>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
