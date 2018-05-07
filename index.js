$(function() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    // put your options and callbacks here
    // aspectRatio: 1.5,
    header: {
      left: 'timelineDay,basicWeek,month',
      center: 'title',
      right: 'today prev,next',
    },
    themeSystem: 'bootstrap4',
    events: './events.json',
    defaultTimedEventDuration: '01:40:00',
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
  });

});