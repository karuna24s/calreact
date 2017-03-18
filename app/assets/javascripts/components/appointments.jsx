var Appointments = React.createClass({

  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: 'Standup Meeting',
      input_appt_time: 'Monday 10am'
    }
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.input_title} input_appt_time={this.state.input_appt_time} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
  
});
