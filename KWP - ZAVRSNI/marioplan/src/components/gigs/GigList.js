import React from "react";
import GigSummary from "./GigSummary";
import { Table } from "react-bootstrap";
import DownloadGigs from "../gigs/DownloadGigs";
import CreateGigsCsv from "../gigs/CreateGigsCsv";
import CreateGigModal from "./ModalGig";
import { connect } from "react-redux";

const GigList = (props) => {
  let gigs = props.gigs;
  if (gigs) {
    return (
      <Table
        striped
        bordered
        hover
        responsive
        variant="dark"
        className="text-center"
      >
        <thead>
          <tr>
            <th>
              <CreateGigModal></CreateGigModal>
            </th>
            <th>
              <DownloadGigs></DownloadGigs>
            </th>
            <th colSpan="4">
              <CreateGigsCsv></CreateGigsCsv>
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
            gigs.map((gig, i) => {
              return <GigSummary gig={gig} i={i} key={i} />;
            })}
        </tbody>
      </Table>
    );
  } else return <div>Loading gigs...</div>;
};

const mapStateToProps = state => {
  return {
    gigs: state.firestore.ordered.gigs
  };
};

export default connect(mapStateToProps)(GigList);
