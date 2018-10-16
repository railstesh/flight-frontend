import React from 'react';
import FilterableTable from 'react-filterable-table';

const FlightComponent = (props) => {
  const renderTime = (props) => {
    if (!props.value) {
      return null;
    }
    const date = new Date(props.value);
    const formateTime = ('0' + date.getUTCHours()).slice(-2) + ":" + ('0' + date.getUTCHours()).slice(-2);

    return (
      <span>{formateTime}</span>
    );
  };

  const fields = [
    { name: 'exact_time', displayName: "Time", inputFilterable: true, sortable: true, render: renderTime },
    { name: 'airline', displayName: "Airline", inputFilterable: true, sortable: true },
    { name: 'destination', displayName: "Destination", inputFilterable: true},
    { name: 'status', displayName: "Status", inputFilterable: true}
  ];
  return (
    <FilterableTable
      namespace="Flights"
      data={props.flights}
      pagersVisible={false}
      fields={fields}
      noRecordsMessage="There are no people to display"
      noFilteredRecordsMessage="No people match your filters!"
    />
  )
}

export default FlightComponent;