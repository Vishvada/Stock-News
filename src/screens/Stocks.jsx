import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Button from 'react-bootstrap/Button';
import NewsCard from '../components/NewsCard';
import { Grid, CircularProgress } from '@mui/material';
import { getStocksApi, addStocksApi, getAllStocksApi } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { pages } from '../utils/pagePaths';

export default function StocksPage() {
    const [userStocks, setUserStocks] = useState([]);
    const [allStocks, setAllStocks] = useState([]);
    const [selectedStocks, setSelectedStocks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isAddingStocks, setIsAddingStocks] = useState(false);
    let navigate=useNavigate();
    useEffect(() => {
        fetchUserStocks();
        fetchAllStocks();
    }, []);

    async function fetchUserStocks() {
        setIsLoading(true);
        try {
            const response = await getStocksApi();
            if(response.error){
                navigate(pages.login)
            }
            if (response.message && Array.isArray(response.message)) {
                setUserStocks(response.message);
            } else {
                console.error("Unexpected API response structure:", response);
            }
        } catch (error) {
            console.error("Failed to fetch user stocks:", error);
        } finally {
            setIsLoading(false);
        }
    }

    async function fetchAllStocks() {
        try {
            const response = await getAllStocksApi();
            if (response.message && Array.isArray(response.message)) {
                setAllStocks(response.message);
            } else {
                console.error("Unexpected API response structure:", response);
            }
        } catch (error) {
            console.error("Failed to fetch all stocks:", error);
        }
    }

    const handleRemove = (selectedList, removedItem) => {
        setSelectedStocks(selectedList);
    };

    const handleSelect = (selectedList, selectedItem) => {
        setSelectedStocks(selectedList);
    };

    const handleAddStocks = async () => {
        setIsAddingStocks(true);
        try {
            const response = await addStocksApi(selectedStocks.map(stock => stock.id));
            if (response.error === false) {
                await fetchUserStocks();
                setSelectedStocks([]);
            } else {
                console.error("Failed to add stocks:", response.message);
            }
        } catch (error) {
            console.error("Error adding stocks:", error);
        } finally {
            setIsAddingStocks(false);
        }
    };

    const availableStocks = allStocks.filter(stock => 
        !userStocks.some(userStock => userStock.stock === stock.stock)
    );

    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-around', position:'relative', top:'0px'}}>
                <Multiselect
                    options={availableStocks}
                    selectedValues={selectedStocks}
                    onSelect={handleSelect}
                    onRemove={handleRemove}
                    displayValue="stock"
                    placeholder='Select stocks to add to your list'
                    style={{
                        searchBox: {width:'60rem'},
                        inputField: {width:'60rem'},
                        optionContainer: {backgroundColor:'black', color:'white'}
                    }}
                    closeOnSelect={false}
                    showCheckbox={true}
                    avoidHighlightFirstOption
                />
                <Button onClick={handleAddStocks} disabled={isAddingStocks}>
                    {isAddingStocks ? 'Adding...' : 'Add Stocks'}
                </Button>
            </div>
            <div style={{marginTop:'20px'}}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <Grid container spacing={2}>
                        {userStocks.map(data => (
                            <Grid item xs={12} sm={6} md={4} key={data.stock}>
                                <NewsCard stockSymbol={data.stock} news={data.news} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </div>
        </div>
    );
}