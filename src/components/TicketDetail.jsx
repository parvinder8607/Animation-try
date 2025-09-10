import React from "react";

const TicketDetail = ({ tickets }) => {
  return (
    <div className="card mt-2 p-2">
      <div className="d-flex justify-content-center">
        <span className={`badge-pill fs-6 ticket-details-badges`}>
          <b>{tickets?.source ?? "source"}</b>
        </span>
        <span className="d-flex align-items-center">
          <svg
            width="70px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.384"
            ></g>
            <g id="SVGRepo_iconCarrier">

              <path
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="#000000"
                strokeWidth="0.8879999999999999"
                strokeLinecap="round"
                strokeLinejoin="round"

              ></path>
            </g>
          </svg>
        </span>
        <span className={`badge-pill fs-6 ticket-details-badges`}>
          <b>{tickets?.destination ?? "destination"}</b>
        </span>
      </div>
      <div className="row border-top p-1 mt-2">
        <div className="col-6">
          <div>
            <b>Ticket Number</b>
          </div>

          <div>{tickets?.ticket_number}</div>
        </div>
        <div className="col-6 text-end">
          <div>
            <b>Transaction Id</b>
          </div>

          <div>{tickets?.transaction_id}</div>
        </div>
      </div>

      <div className="row border-top p-1 mt-2">
        <div className="col-6">
          <div>
            <b>Purchase Time</b>
          </div>

          <div>{tickets?.booking_date}</div>
        </div>
        <div className="col-6 text-end">
          <div>
            <b>Valid Till</b>
          </div>

          <div>{tickets?.validity_time}</div>
        </div>
      </div>

      <div className="row border-top p-1">
        <div className="col-6">
          <div>
            <b>Total Passengers</b>
          </div>
          <div>{tickets?.no_of_passengers ?? 0}</div>
        </div>
        <div className="col-6 text-end">
          <div>
            <b>Total Fare</b>
          </div>
          <div>₹ {tickets?.fare ?? 0}</div>
        </div>
      </div>
    </div>
  );
};


export default TicketDetail;