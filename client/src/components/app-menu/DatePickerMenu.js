import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './DatePickerMenu.css'

export default function DatePickerMenu(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('newValue:' + newValue);
    props.onDateChange(event);
  };

  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd,
    this.getFullYear()
    ].join('-');
  };


  const dates = (() => {
    let datesArr = [];
    let today = new Date();
    for (var i = -5; i < 5; i++) {
      let priorDate = new Date(new Date().setDate(today.getDate() + i));
      datesArr.push(priorDate.yyyymmdd());
    }
    console.log(datesArr);
    return datesArr;
  })();


  return (
    <Box
      sx={{
        flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480 },
        boxShadow: 3,
        bgcolor: 'background.paper',
      }}
      mb={2}
      className={'menu-dateselection'}
    >
      <Tabs value={value} onChange={handleChange}
        variant="scrollable" scrollButtons aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {dates.map((dateIn,index) => (
          <Tab label={dateIn} key={dateIn} value={index} />
        ))}
      </Tabs>
    </Box>
  );
}
