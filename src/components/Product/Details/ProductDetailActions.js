
import * as React from 'react';
import SubHeader from '../../commun/SubHeader';
import { Button, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FaCartPlus } from "react-icons/fa";
import * as API from "../../../services/api";

const ProductDetailActions = (product) => {
    const subHeadTitle = 'Actions';
    const [selectStorage, setSelectStorage] = React.useState('1');
    const [selectColor, setSelectColor] = React.useState('1');
    const [cart, setCart] = React.useState('');

    const handleChangeStorage = (event) => {
        setSelectStorage(event.target.value);
    };
    const handleChangeColor = (event) => {
        setSelectColor(event.target.value);
    };

    const submit = (e) =>{
        e.preventDefault();
        API.addItemCart().then(setCart).catch(console.log);
    }
    if (product.storages && product.colors) {
        const { storages, colors } = product
        return (
            <>
                <SubHeader title={subHeadTitle}></SubHeader>
                <Box sx={{ minWidth: 120 }} style={{ paddingTop: '20px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="storage-simple-select-label">Storage</InputLabel>
                        <Select
                            labelId="storage-simple-select-label"
                            id="storage-simple-select"
                            value={selectStorage}
                            label="Storage"
                            onChange={handleChangeStorage}
                        >
                            {storages.map(storage => {
                                return (
                                    <MenuItem key={storage.id} value={storage.id}>{storage.size} GB</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }} style={{ paddingTop: '20px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="color-simple-select-label">Color</InputLabel>
                        <Select
                            labelId="color-simple-select-label"
                            id="color-simple-select"
                            value={selectColor}
                            label="Color"
                            onChange={handleChangeColor}
                        >
                            {colors.map(color => {
                                return (
                                    <MenuItem key={color.id} value={color.id}>{color.type}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} style={{ paddingTop: '20px', textAlign: 'center' }}>
                    <Button variant="contained" endIcon={<FaCartPlus />} style={{ backgroundColor: '#29a2ff' }} onClick={(e) => submit(e)}>
                        ADD
                    </Button>
                </Box>
            </>
        );
    }
    return null
};


export default ProductDetailActions;






