import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ShippingAddress from './ShippingAddress'
import ShippingMethod from './shippingMethod';
import PaymentMethod from './PaymentMethod'

export default function MainOrderForm() {
    return (
        <>
            <Box sx={{ margin: 5, display: "flex", flexWrap: "nowrap", alignItem: "center", alignSelf: "center", alignContent: "center" }}>
                <Grid container spacing={2}>
                    {/* ======================================== */}
                    <Grid className="" item xl={4}>
                        <ShippingAddress />
                    </Grid>
                    <Grid className="" item xl={8}>
                        <Grid container spacing={2}>
                            <Grid className="" item xl={6}>
                                <ShippingMethod />
                            </Grid>
                            <Grid className="" item xl={6}>
                                <PaymentMethod />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid className="" item xl={12}>
                                <ShippingAddress />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
