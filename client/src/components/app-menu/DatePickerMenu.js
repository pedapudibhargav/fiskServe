import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './DatePickerMenu.css'

export default function DatePickerMenu(props) {

  // New Date formatter
  // eslint-disable-next-line
  Date.prototype.yyyymmdd = function () {
    let mm = this.getMonth() + 1; // getMonth() is zero-based
    let dd = this.getDate();
    return [
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd,
      this.getFullYear()
    ].join('-');
  };

  const [value, setValue] = React.useState(new Date().yyyymmdd());
  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const styles = {
    boxSx: {
      flexGrow: 1,
      boxShadow: 3,
      bgcolor: 'background.paper',
    },
    tabsSx: {
      [`& .${tabsClasses.scrollButtons}`]: {
        '&.Mui-disabled': { opacity: 0.3 },
      },
    },
  }

  // Event handler for tab item click
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(`date component:${newValue}`);
    props.onDateChange(event, newValue);
  };

  // Get Dates to be displayed in date navigation
  const dates = (() => {
    let datesArr = [];
    let today = new Date();
    for (var i = -2; i < 7; i++) {
      let priorDate = new Date(new Date().setDate(today.getDate() + i));
      datesArr.push({
        dayText: daysInWeek[priorDate.getDay()],
        monthText: months[priorDate.getMonth()],
        month: priorDate.getMonth() + 1,
        day: priorDate.getDate(),
        fullDate: priorDate.yyyymmdd()
      });
    }
    return datesArr;
  })();


  return (
    <Box sx={styles.boxSx} mb={2} className={'menu-dateselection'}>
      <Tabs sx={styles.tabsSx} value={value} onChange={handleChange} variant="scrollable" scrollButtons aria-label="visible arrows tabs example">
        {dates.map((dateIn, index) => (
          <Tab label={
            <React.Fragment>
              <span className='nav-date-month-text'>{dateIn.monthText}</span>
              <span className='nav-date-day'>{dateIn.day}</span>
              <span className='nav-date-day-text'>{dateIn.dayText}</span>
            </React.Fragment>
          }
            key={dateIn.fullDate} value={dateIn.fullDate}>
          </Tab>
        ))}
      </Tabs>
    </Box>
  );
}
