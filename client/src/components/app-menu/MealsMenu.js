import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FreeBreakfast from '@mui/icons-material/FreeBreakfast';
import LunchDining from '@mui/icons-material/LunchDining';
import DinnerDining from '@mui/icons-material/DinnerDining';

export default function MealsMenu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                // maxWidth: { xs: 320, sm: 480 },
                boxShadow: 1,
                bgcolor: 'background.paper',
            }}
            mb={2}
        >
            <Tabs value={value}
                onChange={handleChange}
                variant="fullWidth" aria-label="icon label tabs example">
                <Tab icon={<FreeBreakfast />} label="Breakfast" />
                <Tab icon={<LunchDining />} label="Lunch" />
                <Tab icon={<DinnerDining />} label="Dinner" />
            </Tabs>
        </Box>
    );
}