import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Button from 'react-bootstrap/Button';
import NewsCard from '../components/NewsCard';  // Import the new component
import { Grid } from '@mui/material';
import { getStocksApi } from '../utils/api';

export default function StocksPage() {
    const [stocks, setStocks] = useState([]);
    const [numberOfItems, setNumber] = useState(0);

    useEffect(() => {
        async function fetchStocks() {
            try {
                const response = await getStocksApi();
                if (response.message && Array.isArray(response.message)) {
                    setStocks(response.message);
                } else {
                    console.error("Unexpected API response structure:", response);
                }
            } catch (error) {
                console.error("Failed to fetch stocks:", error);
            }
        }


        fetchStocks();
    }, []);

    const handleRemove = () => {
        setNumber(prevNumber => Math.max(0, prevNumber - 1));
    };

    const handleSelect = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    // ... rest of the component remains the same ...

    return (
        <div>
            {/* ... Multiselect and Button remain the same ... */}
            <div style={{display:'flex', justifyContent:'space-around', position:'relative', top:'0px'}}>
                <Multiselect
                    closeOnSelect={false}
                    disablePreSelectedValues
                    avoidHighlightFirstOption
                    displayValue=""
                    isObject={false}
                    hidePlaceholder={() => numberOfItems > 0}
                    placeholder='Select stocks to add to your list'
                    style={{
                        searchBox: {width:'60rem'},
                        inputField: {width:'60rem'},
                        optionContainer: {backgroundColor:'black', color:'white'}
                    }}
                    onKeyPressFn={() => {}}
                    onRemove={handleRemove}
                    onSearch={() => {}}
                    onSelect={handleSelect}
                    options={[
                        'Option 1',
                        'Option 2',
                        'Option 3',
                        'Option 4',
                        'Option 5',
                    ]}
                    showCheckbox
                />
                <Button as="input" type="submit" value="Add Stocks" />
            </div>
            <div style={{marginTop:'20px'}}>
                <Grid container spacing={2}>
                    {stocks.map(data => (
                        <Grid item xs={12} sm={6} md={4} key={data.stock}>
                            <NewsCard stockSymbol={data.stock} news={data.news} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}