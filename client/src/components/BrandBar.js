import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Stack } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Stack direction="horizontal" gap={1} className="flex-wrap">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => device.setSelectedBrand(brand)}
                    className="p-2"
                    border={brand.id === device.selectedBrand.id ? "danger" : "lightgrey"}
                >
                    {brand.name}
                </Card>
            )}
        </Stack>
    );
});

export default BrandBar;