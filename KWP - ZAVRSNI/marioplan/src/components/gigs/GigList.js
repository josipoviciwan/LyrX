import React from "react";
import GigSummary from "./GigSummary";
import DownloadGigs from "../gigs/DownloadGigs";
import CreateGigsCsv from "../gigs/CreateGigsCsv";
import CreateGigModal from "./ModalGig";
import { connect } from "react-redux";

const GigList = props => {
  let gigs = props.gigs;
  if (gigs) {
    return (
      <table className="table table-striped table-dark text-center table-hover table-responsive">
        <thead>
          <tr>
            <th>
              <CreateGigModal />
            </th>
            <th>
              <DownloadGigs />
            </th>
            <th colSpan="4">
              <CreateGigsCsv />
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Profit</th>
            <th>Band </th>
            <th>Edit gig </th>
            <th>Delete gig</th>
          </tr>
        </thead>
        <tbody>
          {gigs &&
            gigs.map((gig,i) => {
              return <GigSummary gig={gig} key={gig.id+i} i={i} />;
            })}
        </tbody>
      </table>
    );
  } else return <div>Loading gigs...</div>;
};

const mapStateToProps = state => {
  return {
    gigs: state.firestore.ordered.gigs
  };
};

export default connect(mapStateToProps)(GigList);
