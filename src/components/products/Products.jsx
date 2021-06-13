import React from "react";
import Grid from "material-ui/core";
const products =[
    {id:1,name:"shoes", description:"running shoes"},
    {id:2,name:"Macbook", description:"running shoes"},
]

const Products=()=>{
    <main>
    <Grid container justify="center" spacing={4}>
    {products.map((product)=>(
    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
        </Grid>
        ))}
    </Grid>
    </main>
}

export default Products;